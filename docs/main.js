(self["webpackChunkng_weather"] = self["webpackChunkng_weather"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 6715);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AppComponent = class AppComponent {
  constructor() {}
  static #_ = this.ctorParameters = () => [];
};
AppComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zipcode-entry/zipcode-entry.component */ 1402);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.service */ 4056);
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ 64);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather.service */ 8986);
/* harmony import */ var _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./current-conditions/current-conditions.component */ 1217);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-page/main-page.component */ 1152);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ 34);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tab/tab.component */ 8710);
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabs/tabs.component */ 2733);
/* harmony import */ var _cache_settings_cache_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cache-settings/cache-settings.component */ 9275);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















let AppModule = class AppModule {};
AppModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__.ZipcodeEntryComponent, _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_3__.ForecastsListComponent, _cache_settings_cache_settings_component__WEBPACK_IMPORTED_MODULE_11__.CacheSettingsComponent, _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__.CurrentConditionsComponent, _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__.MainPageComponent, _tab_tab_component__WEBPACK_IMPORTED_MODULE_9__.TabComponent, _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__.TabsComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, _app_routing__WEBPACK_IMPORTED_MODULE_7__.routing, _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__.ServiceWorkerModule.register('/ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.production
  })],
  providers: [_location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService, _weather_service__WEBPACK_IMPORTED_MODULE_4__.WeatherService],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
})], AppModule);


/***/ }),

/***/ 34:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routing: () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ 64);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page/main-page.component */ 1152);



const appRoutes = [{
  path: '',
  component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent
}, {
  path: 'forecast/:zipcode',
  component: _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__.ForecastsListComponent
}];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(appRoutes, {});

/***/ }),

/***/ 9275:
/*!************************************************************!*\
  !*** ./src/app/cache-settings/cache-settings.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheSettingsComponent: () => (/* binding */ CacheSettingsComponent)
/* harmony export */ });
/* harmony import */ var _cache_settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cache-settings.component.html?ngResource */ 5898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var app_caching_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/caching.service */ 9289);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let CacheSettingsComponent = class CacheSettingsComponent {
  constructor(cachingService) {
    this.cachingService = cachingService;
    this.currentCacheLifeTime = this.cachingService.currentCacheLifeTime;
  }
  setCachingTime(time) {
    if (isNaN(time) || time < 0) {
      return;
    }
    this.cachingService.setCacheLifeTime(time);
  }
  static #_ = this.ctorParameters = () => [{
    type: app_caching_service__WEBPACK_IMPORTED_MODULE_1__.CachingService
  }];
};
CacheSettingsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-cache-settings',
  template: _cache_settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], CacheSettingsComponent);


/***/ }),

/***/ 9289:
/*!************************************!*\
  !*** ./src/app/caching.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CachingService: () => (/* binding */ CachingService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let CachingService = class CachingService {
  constructor() {
    this.CACHE_KEY_PREFIX = 'cache_';
    this.CACHE_STORAGE_KEY = 'cacheLifeTime';
    this.DEFAULT_CACHE_LIFE_TIME = 2 * 60; // 2 hours in minutes
    this.cacheLifeTimeInMinutes = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(Number(localStorage.getItem(this.CACHE_STORAGE_KEY)) || this.DEFAULT_CACHE_LIFE_TIME);
    this.currentCacheLifeTime = this.cacheLifeTimeInMinutes.asReadonly();
  }
  setCacheLifeTime(timeInMinutes) {
    this.cacheLifeTimeInMinutes.set(timeInMinutes);
    localStorage.setItem(this.CACHE_STORAGE_KEY, String(this.cacheLifeTimeInMinutes()));
  }
  generateCacheKey(key) {
    return `${this.CACHE_KEY_PREFIX}${key}`;
  }
  isCacheValid(cacheItem) {
    const currentTime = Date.now();
    return cacheItem && currentTime - cacheItem.timestamp < this.cacheLifeTimeInMinutes() * 60 * 1000; // Convert minutes to milliseconds
  }

  removeExpiredCacheItems() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(this.CACHE_KEY_PREFIX)) {
        const cacheItem = JSON.parse(localStorage.getItem(key));
        if (!this.isCacheValid(cacheItem)) {
          localStorage.removeItem(key);
        }
      }
    }
  }
  getData(key) {
    this.removeExpiredCacheItems();
    const cacheKey = this.generateCacheKey(key);
    const cachedData = JSON.parse(localStorage.getItem(cacheKey));
    if (this.isCacheValid(cachedData)) {
      return cachedData.data;
    }
    // If cache is expired or not found
    return null;
  }
  setData(key, data) {
    const cacheKey = this.generateCacheKey(key);
    const cachedData = {
      data,
      timestamp: Date.now()
    };
    localStorage.setItem(cacheKey, JSON.stringify(cachedData));
  }
  clearData(key) {
    const cacheKey = this.generateCacheKey(key);
    localStorage.removeItem(cacheKey);
  }
};
CachingService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
  providedIn: 'root'
})], CachingService);


/***/ }),

/***/ 1217:
/*!********************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentConditionsComponent: () => (/* binding */ CurrentConditionsComponent)
/* harmony export */ });
/* harmony import */ var _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-conditions.component.html?ngResource */ 9139);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-conditions.component.css?ngResource */ 2340);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.service */ 8986);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../location.service */ 4056);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9718);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 4555);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 3303);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let CurrentConditionsComponent = class CurrentConditionsComponent {
  constructor() {
    this._destroy$$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.weatherService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router);
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_location_service__WEBPACK_IMPORTED_MODULE_3__.LocationService);
    this.currentConditionsByZip = this.weatherService.getCurrentConditions();
    if (!this.currentConditionsByZip().length) {
      const requests = this.locationService.locations.map(location => this.weatherService.addCurrentConditions$(location));
      (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(...requests).subscribe();
    }
    this.locationService.addedLocation$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(location => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(location), this.weatherService.addCurrentConditions$(location)])),
    // Unsubscribe when the component is destroyed to prevent memory leaks and  artifacts
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._destroy$$)).subscribe(([location, conditions]) => {
      if (conditions) {
        this.locationService.addToStorage(location);
      }
      if (!conditions) {
        alert(`Could not get weather data for zipcode ${location}`);
      }
    });
    this.locationService.removedLocation$.subscribe(location => {
      this.weatherService.removeCurrentConditions(location);
    });
  }
  ngOnDestroy() {
    this._destroy$$.next();
    this._destroy$$.complete();
  }
  showForecast(zipcode) {
    this.router.navigate(['/forecast', zipcode]);
  }
  static #_ = this.ctorParameters = () => [];
};
CurrentConditionsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-current-conditions',
  template: _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CurrentConditionsComponent);


/***/ }),

/***/ 64:
/*!************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForecastsListComponent: () => (/* binding */ ForecastsListComponent)
/* harmony export */ });
/* harmony import */ var _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list.component.html?ngResource */ 4517);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts-list.component.css?ngResource */ 7854);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.service */ 8986);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ForecastsListComponent = class ForecastsListComponent {
  constructor(weatherService, route) {
    this.weatherService = weatherService;
    route.params.subscribe(params => {
      this.zipcode = params['zipcode'];
      weatherService.getForecast(this.zipcode).subscribe(data => this.forecast = data);
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
  }];
};
ForecastsListComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-forecasts-list',
  template: _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ForecastsListComponent);


/***/ }),

/***/ 4056:
/*!*************************************!*\
  !*** ./src/app/location.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOCATIONS: () => (/* binding */ LOCATIONS),
/* harmony export */   LocationService: () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2484);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


const LOCATIONS = "locations";
let LocationService = class LocationService {
  constructor() {
    this.addedLocation$$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.removedLocation$$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.addedLocation$ = this.addedLocation$$.asObservable();
    this.removedLocation$ = this.removedLocation$$.asObservable();
    this.locations = [];
    let locString = localStorage.getItem(LOCATIONS);
    if (locString) {
      this.locations = JSON.parse(locString);
    }
  }
  addLocation(zipcode) {
    this.addedLocation$$.next(zipcode);
  }
  removeLocation(zipcode) {
    let index = this.locations.indexOf(zipcode);
    if (index !== -1) {
      this.locations.splice(index, 1);
      localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
      this.removedLocation$$.next(zipcode);
    }
  }
  addToStorage(zipcode) {
    this.locations.push(zipcode);
    localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
  }
  static #_ = this.ctorParameters = () => [];
};
LocationService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], LocationService);


/***/ }),

/***/ 1152:
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPageComponent: () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.component.html?ngResource */ 8132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let MainPageComponent = class MainPageComponent {};
MainPageComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-main-page',
  template: _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], MainPageComponent);


/***/ }),

/***/ 8710:
/*!**************************************!*\
  !*** ./src/app/tab/tab.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabComponent: () => (/* binding */ TabComponent)
/* harmony export */ });
/* harmony import */ var _tab_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.component.html?ngResource */ 3574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let TabComponent = class TabComponent {
  constructor() {
    this.active = false;
  }
  static #_ = this.propDecorators = {
    tabTitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tabTitleTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  };
};
TabComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-tab',
  template: _tab_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], TabComponent);


/***/ }),

/***/ 2733:
/*!****************************************!*\
  !*** ./src/app/tabs/tabs.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsComponent: () => (/* binding */ TabsComponent)
/* harmony export */ });
/* harmony import */ var _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.component.html?ngResource */ 4872);
/* harmony import */ var _tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.component.css?ngResource */ 9626);
/* harmony import */ var _tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var app_tab_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/tab/tab.component */ 8710);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9718);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5617);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let TabsComponent = class TabsComponent {
  constructor() {
    this.closeTab = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  ngAfterContentInit() {
    // Reset tab selection on init and when selected tab deleted
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null), this.tabs.changes)
    // delay to avoid ExpressionChangedAfterItHasBeenCheckedError
    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.delay)(0)).subscribe(() => {
      this._resetSelectedTab();
    });
  }
  selectTab(tab) {
    this.tabs.toArray().forEach(t => t.active = false);
    tab.active = true;
  }
  close(tabIndex, clickEvent) {
    // Prevent the tab from being selected
    clickEvent.stopPropagation();
    this.closeTab.emit(tabIndex);
  }
  _resetSelectedTab() {
    if (this.tabs.length > 0) {
      const selectedTab = this.tabs.find(tab => tab.active);
      if (!selectedTab && this.tabs.first) {
        this.tabs.first.active = true;
      }
    }
  }
  static #_ = this.propDecorators = {
    tabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ContentChildren,
      args: [app_tab_tab_component__WEBPACK_IMPORTED_MODULE_2__.TabComponent]
    }],
    closeTab: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  };
};
TabsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-tabs',
  template: _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabsComponent);


/***/ }),

/***/ 8986:
/*!************************************!*\
  !*** ./src/app/weather.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherService: () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5746);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8175);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _caching_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caching.service */ 9289);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WeatherService_1;





let WeatherService = class WeatherService {
  static #_ = WeatherService_1 = this;
  static #_2 = this.URL = 'https://api.openweathermap.org/data/2.5';
  static #_3 = this.APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  static #_4 = this.ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
  constructor(http, cachingService) {
    this.http = http;
    this.cachingService = cachingService;
    this.currentConditions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([]);
    this.CACHE_PREFIX_CURRENT = 'current_';
    this.CACHE_PREFIX_FORECAST = 'forecast_';
  }
  addCurrentConditions$(zipcode) {
    const cachedData = this.cachingService.getData(this.CACHE_PREFIX_CURRENT + zipcode);
    const dataSource$ = cachedData ? (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(cachedData) : this.http.get(`${WeatherService_1.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService_1.APPID}`);
    // Here we make a request to get the current conditions data from the API. Note the use of backticks and an expression to insert the zipcode
    return dataSource$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(data => {
      this.currentConditions.update(conditions => [...conditions, {
        zip: zipcode,
        data
      }]);
      if (!cachedData) {
        this.cachingService.setData(this.CACHE_PREFIX_CURRENT + zipcode, data);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null)));
  }
  removeCurrentConditions(zipcode) {
    this.currentConditions.update(conditions => {
      const removedIndex = conditions.findIndex(condition => condition.zip === zipcode);
      if (~removedIndex) {
        conditions.splice(removedIndex, 1);
      }
      return conditions;
    });
  }
  getCurrentConditions() {
    return this.currentConditions.asReadonly();
  }
  getForecast(zipcode) {
    const cachedData = this.cachingService.getData(this.CACHE_PREFIX_FORECAST + zipcode);
    const dataSource$ = cachedData ? (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(cachedData) : this.http.get(`${WeatherService_1.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService_1.APPID}`);
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    return dataSource$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(data => {
      if (!cachedData) {
        this.cachingService.setData(this.CACHE_PREFIX_FORECAST + zipcode, data);
      }
    }));
  }
  getWeatherIcon(id) {
    if (id >= 200 && id <= 232) return WeatherService_1.ICON_URL + "art_storm.png";else if (id >= 501 && id <= 511) return WeatherService_1.ICON_URL + "art_rain.png";else if (id === 500 || id >= 520 && id <= 531) return WeatherService_1.ICON_URL + "art_light_rain.png";else if (id >= 600 && id <= 622) return WeatherService_1.ICON_URL + "art_snow.png";else if (id >= 801 && id <= 804) return WeatherService_1.ICON_URL + "art_clouds.png";else if (id === 741 || id === 761) return WeatherService_1.ICON_URL + "art_fog.png";else return WeatherService_1.ICON_URL + "art_clear.png";
  }
  static #_5 = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
  }, {
    type: _caching_service__WEBPACK_IMPORTED_MODULE_0__.CachingService
  }];
};
WeatherService = WeatherService_1 = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], WeatherService);


/***/ }),

/***/ 1402:
/*!**********************************************************!*\
  !*** ./src/app/zipcode-entry/zipcode-entry.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipcodeEntryComponent: () => (/* binding */ ZipcodeEntryComponent)
/* harmony export */ });
/* harmony import */ var _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipcode-entry.component.html?ngResource */ 7606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../location.service */ 4056);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ZipcodeEntryComponent = class ZipcodeEntryComponent {
  constructor(service) {
    this.service = service;
  }
  addLocation(zipcode) {
    this.service.addLocation(zipcode);
  }
  static #_ = this.ctorParameters = () => [{
    type: _location_service__WEBPACK_IMPORTED_MODULE_1__.LocationService
  }];
};
ZipcodeEntryComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-zipcode-entry',
  template: _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], ZipcodeEntryComponent);


/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4737);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);

/***/ }),

/***/ 6715:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2340:
/*!********************************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.css?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.flex {
  display: flex;
  justify-content: space-between;
}
`, "",{"version":3,"sources":["webpack://./src/app/current-conditions/current-conditions.component.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,8BAA8B;AAChC","sourcesContent":[".flex {\n  display: flex;\n  justify-content: space-between;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7854:
/*!************************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.css?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.icon {
  width: 45px;
  height: 45px;
  position: absolute;
  right: 20px;
  top: -2px;
}
`, "",{"version":3,"sources":["webpack://./src/app/forecasts-list/forecasts-list.component.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,SAAS;AACX","sourcesContent":[".icon {\n  width: 45px;\n  height: 45px;\n  position: absolute;\n  right: 20px;\n  top: -2px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9626:
/*!****************************************************!*\
  !*** ./src/app/tabs/tabs.component.css?ngResource ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.tabs-panel {
  list-style: none;
  overflow-x: auto;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 5px;
}

.tabs-panel__button {
  color: white;
  background-color: #337ab7;
  border-color: #2e6da4;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 1;
}

.tabs-panel__button:hover {
  background-color: #2e6da4;
}

.tabs-panel__button--active {
  background-color: #1b4161 !important;
}

.tabs-panel__button-close {
  padding: 10px;
}

.tabs-panel__button-title {
  padding: 10px;
}
`, "",{"version":3,"sources":["webpack://./src/app/tabs/tabs.component.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,SAAS;EACT,UAAU;EACV,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,qBAAqB;EACrB,eAAe;EACf,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf","sourcesContent":[".tabs-panel {\n  list-style: none;\n  overflow-x: auto;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  gap: 5px;\n}\n\n.tabs-panel__button {\n  color: white;\n  background-color: #337ab7;\n  border-color: #2e6da4;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 1;\n}\n\n.tabs-panel__button:hover {\n  background-color: #2e6da4;\n}\n\n.tabs-panel__button--active {\n  background-color: #1b4161 !important;\n}\n\n.tabs-panel__button-close {\n  padding: 10px;\n}\n\n.tabs-panel__button-title {\n  padding: 10px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<router-outlet></router-outlet>\n";

/***/ }),

/***/ 5898:
/*!*************************************************************************!*\
  !*** ./src/app/cache-settings/cache-settings.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"well\">\n  <h2>Set caching time in minutes (currently {{ currentCacheLifeTime() }} minutes)</h2>\n  <input type=\"text\" #time placeholder=\"Caching time\" class=\"form-control\">\n  <br>\n  <button class=\"btn btn-primary\" (click)=\"setCachingTime(time.value)\" >\n    Set caching time\n  </button>\n</div>";

/***/ }),

/***/ 9139:
/*!*********************************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-tabs (closeTab)=\"locationService.removeLocation(currentConditionsByZip()[$event].zip)\">\n  <ng-container *ngFor=\"let location of currentConditionsByZip()\">\n    <ng-template #tabTitleTemplate>\n      {{ location.data.name}} ({{location.zip}})\n    </ng-template>\n\n    <app-tab [tabTitleTemplate]=\"tabTitleTemplate\">\n      <div class=\"well flex\" (click)=\"showForecast(location.zip)\">\n        <div>\n          <h3>{{location.data.name}} ({{location.zip}})</h3>\n          <h4>Current conditions: {{location.data.weather[0].main}}</h4>\n          <h4>Temperatures today:</h4>\n          <p>\n            Current {{location.data.main.temp | number:'.0-0'}}\n            - Max {{location.data.main.temp_max | number:'.0-0'}}\n            - Min {{location.data.main.temp_min | number:'.0-0'}}\n          </p>\n          <p>\n            <a [routerLink]=\"['/forecast', location.zip]\" >Show 5-day forecast for {{location.data.name}}</a>\n          </p>\n        </div>\n        <div>\n          <img [src]=\"weatherService.getWeatherIcon(location.data.weather[0].id)\">\n        </div>\n    </div>\n    </app-tab>\n  </ng-container>\n</app-tabs>\n\n<app-cache-settings></app-cache-settings>\n\n\n";

/***/ }),

/***/ 4517:
/*!*************************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">5-day forecast for {{forecast?.city.name}}</h3>\n\n    </div>\n    <ul class=\"list-group\">\n      <li *ngFor=\"let dailyForecast of forecast?.list\" class=\"list-group-item\">\n        {{ (dailyForecast.dt * 1000) | date:'EEEE, MMM d'}}:\n        {{dailyForecast.weather[0].main}}\n        - Min: {{dailyForecast.temp.min | number:'.0-0'}}\n        - Max: {{dailyForecast.temp.max | number:'.0-0'}}\n\n        <img [src]=\"weatherService.getWeatherIcon(dailyForecast.weather[0].id)\" class=\"icon\">\n      </li>\n    </ul>\n  </div>\n</div>\n<button class=\"btn btn-success\" [routerLink]=\"'/'\" >< Back to main page</button>\n";

/***/ }),

/***/ 8132:
/*!***************************************************************!*\
  !*** ./src/app/main-page/main-page.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid\">\n\n  <app-zipcode-entry> </app-zipcode-entry>\n  <app-current-conditions></app-current-conditions>\n\n</div>\n";

/***/ }),

/***/ 3574:
/*!***************************************************!*\
  !*** ./src/app/tab/tab.component.html?ngResource ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container *ngIf=\"active\">\n  <ng-content></ng-content>\n</ng-container>";

/***/ }),

/***/ 4872:
/*!*****************************************************!*\
  !*** ./src/app/tabs/tabs.component.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ul class=\"tabs-panel\">\n  <li\n    *ngFor=\"let tab of tabs; let i = index\"\n    (click)=\"selectTab(tab)\"\n    class=\"tabs-panel__button\"\n    [class.tabs-panel__button--active]=\"tab.active\"\n  >\n    <span class=\"tabs-panel__button-title\">\n      <ng-container *ngIf=\"!tab.tabTitleTemplate\">\n        {{ tab.tabTitle }}\n      </ng-container>\n\n      <ng-container *ngIf=\"!tab.title && tab.tabTitleTemplate\">\n        <ng-container *ngTemplateOutlet=\"tab.tabTitleTemplate\"></ng-container>\n      </ng-container>\n    </span>\n   \n    <span\n      class=\"tabs-panel__button-close\"\n      (click)=\"close(i, $event)\"\n    >\n      &times;\n    </span>\n  </li>  \n</ul>\n\n<ng-content></ng-content>\n";

/***/ }),

/***/ 7606:
/*!***********************************************************************!*\
  !*** ./src/app/zipcode-entry/zipcode-entry.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"well\">\n  <h2>Enter a zipcode:</h2>\n  <input type=\"text\" #zipcode placeholder=\"Zipcode\" class=\"form-control\">\n  <br>\n  <button class=\"btn btn-primary\" (click)=\"addLocation(zipcode.value)\" >\n    Add location\n  </button>\n</div>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map