import { ConfiguracoesPageModule } from './../pages/configuracoes/configuracoes.module';
import { PerfilPageModule } from './../pages/perfil/perfil.module';
import { SobrePageModule } from './../pages/sobre/sobre.module';
import { PerfilPage } from './../pages/perfil/perfil';
import { ConfiguracoesPage } from './../pages/configuracoes/configuracoes';
import { SobrePage } from './../pages/sobre/sobre';
import { FeedPage } from './../pages/feed/feed';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule} from "@angular/http"

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPageModule } from '../pages/feed/feed.module';
import { IntroPageModule } from '../pages/intro/intro.module';
import { MoovieProvider } from '../providers/moovie/moovie';
import { HttpClientModule } from '@angular/common/http';
import { ConfigProvider } from '../providers/config/config';
import { DetalhesPageModule } from '../pages/detalhes/detalhes.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule,
    IntroPageModule,
    SobrePageModule,
    PerfilPageModule,
    ConfiguracoesPageModule,
    DetalhesPageModule,
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FeedPage,
    SobrePage,
    ConfiguracoesPage,
    PerfilPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MoovieProvider,
    ConfigProvider
  ]
})
export class AppModule { }
