import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export const LOCATIONS : string = "locations";

@Injectable()
export class LocationService {

  private addedLocation$$: Subject <string> = new Subject<string>();
  private removedLocation$$: Subject <string> = new Subject<string>();
  addedLocation$ = this.addedLocation$$.asObservable();
  removedLocation$ = this.removedLocation$$.asObservable();
  locations : string[] = [];

  constructor() {
    let locString = localStorage.getItem(LOCATIONS);
    
    if (locString) {
      this.locations = JSON.parse(locString);
    }
  }

  addLocation(zipcode : string) {
    this.addedLocation$$.next(zipcode);
  }

  removeLocation(zipcode : string) {
    let index = this.locations.indexOf(zipcode);
    if (index !== -1){
      this.locations.splice(index, 1);
      localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
      this.removedLocation$$.next(zipcode);
    }
  }
  
  addToStorage(zipcode : string): void {
    this.locations.push(zipcode);
    localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
  }
}
