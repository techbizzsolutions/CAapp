import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { Network } from '@ionic-native/network';
import { Uid } from '@ionic-native/uid';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { LoaderServiceProvider } from '../providers/loader-service/loader-service';
import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileTransfer } from '@ionic-native/file-transfer';
import { Contacts } from '@ionic-native/contacts';


@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    DashboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    Uid,
    AndroidPermissions,
    FileChooser,
    FileTransfer,
    Contacts,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    LoaderServiceProvider
  ]
})
export class AppModule {}
