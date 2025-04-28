import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import './styles.css';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptor } from './app/interceptors/auth.interceptor';
import { inject } from '@angular/core';
import { AuthService } from './app/services/auth.service';

/*
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
*/
/*
bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes)
    ]
  });
  */

  bootstrapApplication
  (AppComponent, {
    providers: [
      provideRouter(routes),
      provideHttpClient(withInterceptorsFromDi())
    ]
  });
