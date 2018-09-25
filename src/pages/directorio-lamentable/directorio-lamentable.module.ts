import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DirectorioLamentablePage } from './directorio-lamentable';

@NgModule({
  declarations: [
    DirectorioLamentablePage,
  ],
  imports: [
    IonicPageModule.forChild(DirectorioLamentablePage),
  ],
})
export class DirectorioLamentablePageModule {}
