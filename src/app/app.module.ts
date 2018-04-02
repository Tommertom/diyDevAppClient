import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Flashlight } from '@ionic-native/flashlight';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { Badge } from '@ionic-native/badge';
import { BatteryStatus } from '@ionic-native/battery-status';
import { Brightness } from '@ionic-native/brightness';
import { CallNumber } from '@ionic-native/call-number';
import { Camera } from '@ionic-native/camera';
import { Clipboard } from '@ionic-native/clipboard';


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [ 
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    Flashlight,
    AndroidFullScreen,
    Badge,
    BatteryStatus,
    Brightness,
    CallNumber, 
    Camera,
    Clipboard,

    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
