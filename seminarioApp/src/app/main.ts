import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

import {ToastController} from 'ionic-angular';

import {toastDecorate} from '../pages/utils/toastDecorate';

toastDecorate(ToastController);

platformBrowserDynamic().bootstrapModule(AppModule);
