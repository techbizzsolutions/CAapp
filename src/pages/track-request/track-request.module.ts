import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrackRequestPage } from './track-request';

@NgModule({
  declarations: [
    TrackRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(TrackRequestPage),
  ],
})
export class TrackRequestPageModule {}
