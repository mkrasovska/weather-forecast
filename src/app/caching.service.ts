import { Injectable, Signal, WritableSignal, signal } from "@angular/core";

interface CachedData<T> {
  data: T;
  timestamp: number;
}

@Injectable({
  providedIn: 'root'
})
export class CachingService {
  private readonly CACHE_KEY_PREFIX = 'cache_';
  private readonly CACHE_STORAGE_KEY = 'cacheLifeTime';
  private readonly DEFAULT_CACHE_LIFE_TIME: number = 2 * 60; // 2 hours in minutes
  private cacheLifeTimeInMinutes: WritableSignal<number> = signal(
    Number(localStorage.getItem(this.CACHE_STORAGE_KEY)) || this.DEFAULT_CACHE_LIFE_TIME
  );
  public currentCacheLifeTime: Signal<number> = this.cacheLifeTimeInMinutes.asReadonly();

  public setCacheLifeTime(timeInMinutes: number): void {
    this.cacheLifeTimeInMinutes.set(timeInMinutes);
    localStorage.setItem(this.CACHE_STORAGE_KEY, String(this.cacheLifeTimeInMinutes()));
  };
  
  private generateCacheKey(key: string): string {
    return `${this.CACHE_KEY_PREFIX}${key}`;
  }

  private isCacheValid<T>(cacheItem: CachedData<T>): boolean {
    const currentTime = Date.now();
    return cacheItem && (currentTime - cacheItem.timestamp) < this.cacheLifeTimeInMinutes() * 60 * 1000; // Convert minutes to milliseconds
  }

  private removeExpiredCacheItems(): void {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(this.CACHE_KEY_PREFIX)) {
        const cacheItem = JSON.parse(localStorage.getItem(key) as string) as CachedData<any>;
        if (!this.isCacheValid(cacheItem)) {
          localStorage.removeItem(key);
        }
      }
    }
  }

  public getData<T>(key: string): T | null {
    this.removeExpiredCacheItems();
    const cacheKey = this.generateCacheKey(key);
    const cachedData = JSON.parse(localStorage.getItem(cacheKey) as string) as CachedData<T>;
    if (this.isCacheValid(cachedData)) {
      return cachedData.data;
    }

    // If cache is expired or not found
    return null;
  }

  public setData<T>(key: string, data: T): void {
    const cacheKey = this.generateCacheKey(key);
    const cachedData: CachedData<T> = { data, timestamp: Date.now() };
    localStorage.setItem(cacheKey, JSON.stringify(cachedData));
  }

  public clearData(key: string): void {
    const cacheKey = this.generateCacheKey(key);
    localStorage.removeItem(cacheKey);
  }
}



