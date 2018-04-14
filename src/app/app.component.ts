
import { ConfigProvider } from './../providers/config/config';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';

@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigProvider
  ]
})
export class MyApp {
  rootPage:any;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    ConfigProvider: ConfigProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //Open intro page just first time
      let config = ConfigProvider.getLocalhostData();
      if(config == null){
        this.rootPage = IntroPage;
        ConfigProvider.setLocalhostData(false, "appname", "appusername");
      } else {
        this.rootPage = TabsPage;
      }
      
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
