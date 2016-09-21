import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {HomeComponent} from './Home/home.component';
import {LoginComponent} from './login/login.component';


@Component({
  selector: 'my-app',
  template: `
    <div class="app">
      Hello world!
      <nav>
        <ul>
          <li>
            <a [routerLink]=" ['HomeComponent'] ">Home</a>
          </li>
          <li>
            <a [routerLink]=" ['LoginComponent'] ">Login</a>
          </li>
        </ul>
      </nav>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  ` ,
  
   directives: [ROUTER_DIRECTIVES]
  
})


@RouteConfig([
  { path: '/home', name: 'Home', component: HomeComponent },
  { path: '/login', name: 'Login', component: LoginComponent }
])
export class AppComponent { }


