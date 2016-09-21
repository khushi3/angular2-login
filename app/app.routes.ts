// Imports
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './login/login.component';

// Route Configuration
export const routes: RouteConfig = [
  { path: 'homeComponent', component: HomeComponent },
  { path: 'loginComponent', component: LoginComponent }
];

// Export routes
export const APP_ROUTER_PROVIDERS = [
  ROUTER_PROVIDERS(routes)
];