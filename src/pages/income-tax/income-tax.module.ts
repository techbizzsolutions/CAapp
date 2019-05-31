import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IncomeTaxPage } from './income-tax';

@NgModule({
  declarations: [
    IncomeTaxPage,
  ],
  imports: [
    IonicPageModule.forChild(IncomeTaxPage),
  ],
})
export class IncomeTaxPageModule {}
