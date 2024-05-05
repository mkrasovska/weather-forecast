import {Component, effect, inject, Signal} from '@angular/core';
import {WeatherService} from "../weather.service";
import {LocationService} from "../location.service";
import {Router} from "@angular/router";
import {ConditionsAndZip} from '../conditions-and-zip.type';


@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

  private weatherService = inject(WeatherService);
  private router = inject(Router);
  protected locationService = inject(LocationService);
  protected currentConditionsByZip: Signal<ConditionsAndZip[]> = this.weatherService.getCurrentConditions();

  public constructor() {
    if (!this.currentConditionsByZip().length) {
      this.locationService.locations.forEach(location => this.weatherService.addCurrentConditions(location));
    }

    effect(() => {
      const addedLocation: string = this.locationService.addedLocationSignal();

      if (addedLocation) {
        this.weatherService.addCurrentConditions(addedLocation);
        this.locationService.resetAddedLocations()
      }
    }, {
      allowSignalWrites: true
    });

    effect(() => {
      const removedLocation: string = this.locationService.removedLocationSignal();

      if (removedLocation) {
        this.weatherService.removeCurrentConditions(removedLocation);
        this.locationService.resetRemovedLocations();
      }
    }, {
      allowSignalWrites: true
    })
  }

  showForecast(zipcode : string){
    this.router.navigate(['/forecast', zipcode])
  }
}
