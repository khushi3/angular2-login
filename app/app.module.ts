import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {routes, appRouting} from './app.routes';

import { AppComponent }         from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    appRouting

  ],
  declarations: [
    AppComponent,ROUTER_DIRECTIVES, ROUTER_PROVIDERS,
   
  ],
  providers: [
    ROUTER_PROVIDERS
  ],
  bootstrap: [ AppComponent ,APP_ROUTER_PROVIDERS]
})
export class AppModule {
}
