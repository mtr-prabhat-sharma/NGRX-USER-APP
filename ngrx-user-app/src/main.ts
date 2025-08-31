import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { UserEffects } from './app/store/effects/user.effects';
import { userReducer } from './app/store/reducers/user.reducer';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideStore({ users: userReducer }),  // register your reducer here
    provideEffects([UserEffects]),
    provideStoreDevtools({ maxAge: 25 }),
  ]
}).catch(err => console.error(err));  
