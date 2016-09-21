import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

// import { bootstrap }    from '../node_modules';
import { APP_ROUTER_PROVIDERS } from './app.routes';


platformBrowserDynamic().bootstrapModule(AppModule);
