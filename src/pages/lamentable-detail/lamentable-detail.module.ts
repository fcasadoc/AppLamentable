import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LamentableDetailPage } from './lamentable-detail';

@NgModule({
  declarations: [
    LamentableDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(LamentableDetailPage),
  ],
})
export class LamentableDetailPageModule {}
