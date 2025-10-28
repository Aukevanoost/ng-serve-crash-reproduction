import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// Need to keep this here to avoid tree-shaking, but it
// is not required to "provide" the routes in a Remote via provideRouter()
import { routes } from './app.exports';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true })]
};
