import {Component, Signal} from '@angular/core';
import { CachingService } from 'app/caching.service';

@Component({
  selector: 'app-cache-settings',
  templateUrl: './cache-settings.component.html',
})
export class CacheSettingsComponent {
  protected currentCacheLifeTime: Signal<number> = this.cachingService.currentCacheLifeTime;
  constructor(private cachingService: CachingService) {}

  public setCachingTime(time: number): void {
    if (isNaN(time) || time < 0) {
      return
    }

    this.cachingService.setCacheLifeTime(time);
  }
}
