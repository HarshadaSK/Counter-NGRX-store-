import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore(),
    provideState({ name: 'counter', reducer: counterReducer }), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode(),autoPause: true })],
};