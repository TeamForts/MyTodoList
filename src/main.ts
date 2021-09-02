import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import {ruLocale} from "./locale";
import {loadMessages, locale} from "devextreme/localization";

if (environment.production) {
  enableProdMode();
}

loadMessages(ruLocale);
locale('ru-Ru');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
