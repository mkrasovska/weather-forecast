import { Injectable, signal } from '@angular/core';

export const LOCATIONS : string = "locations";

@Injectable()
export class LocationService {
  addedLocationSignal = signal<string>('');
  removedLocationSignal = signal<string>('');
  locations : string[] = [];

  constructor() {
    let locString = localStorage.getItem(LOCATIONS);
    
    if (locString) {
      this.locations = JSON.parse(locString);
    }
  }

  addLocation(zipcode : string) {
    this.locations.push(zipcode);
    localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
    this.addedLocationSignal.set(zipcode);
  }

  removeLocation(zipcode : string) {
    let index = this.locations.indexOf(zipcode);
    if (index !== -1){
      this.locations.splice(index, 1);
      localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
      this.removedLocationSignal.set(zipcode);
    }
  }

  resetAddedLocations(): void {
    this.addedLocationSignal.set(null);
  }

  resetRemovedLocations(): void {
    this.removedLocationSignal.set(null);
  }
}
