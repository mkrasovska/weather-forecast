import {Component, inject, OnDestroy, Signal} from '@angular/core';
import {WeatherService} from "../weather.service";
import {LocationService} from "../location.service";
import {Router} from "@angular/router";
import {ConditionsAndZip} from '../conditions-and-zip.type';
import {combineLatest, merge, Observable, of, Subject} from 'rxjs';
import {switchMap, takeUntil} from 'rxjs/operators';
import { CurrentConditions } from './current-conditions.type';


@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent implements OnDestroy {

  private _destroy$$: Subject<void> = new Subject<void>();
  private weatherService = inject(WeatherService);
  private router = inject(Router);
  protected locationService = inject(LocationService);
  protected currentConditionsByZip: Signal<ConditionsAndZip[]> = this.weatherService.getCurrentConditions();

  public constructor() {
    if (!this.currentConditionsByZip().length) {
      const requests: Observable<CurrentConditions>[] = this.locationService.locations.map(location => this.weatherService.addCurrentConditions$(location));
      
      merge(...requests).subscribe();
    }

    this.locationService.addedLocation$.pipe(
      switchMap((location) => combineLatest(
        [of(location), this.weatherService.addCurrentConditions$(location)]
      )),
      // Unsubscribe when the component is destroyed to prevent memory leaks and  artifacts
      takeUntil(this._destroy$$)
    ).subscribe(([location,conditions]: [string, CurrentConditions]) => {

      if (conditions) {
         this.locationService.addToStorage(location);
      }

      if (!conditions) {
        alert(`Could not get weather data for zipcode ${location}`);
      }
    });

    this.locationService.removedLocation$.subscribe((location) => {
      this.weatherService.removeCurrentConditions(location);
    })
  }

  public ngOnDestroy(): void {
    this._destroy$$.next();
    this._destroy$$.complete();
  }

  showForecast(zipcode : string){
    this.router.navigate(['/forecast', zipcode])
  }
}
