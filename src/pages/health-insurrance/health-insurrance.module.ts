import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HealthInsurrancePage } from './health-insurrance';

@NgModule({
  declarations: [
    HealthInsurrancePage,
  ],
  imports: [
    IonicPageModule.forChild(HealthInsurrancePage),
  ],
})
export class HealthInsurrancePageModule {}
