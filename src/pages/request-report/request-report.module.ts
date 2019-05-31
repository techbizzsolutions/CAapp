import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestReportPage } from './request-report';

@NgModule({
  declarations: [
    RequestReportPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestReportPage),
  ],
})
export class RequestReportPageModule {}
