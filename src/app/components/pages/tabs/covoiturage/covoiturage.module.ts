import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CovoituragePage } from './covoiturage.page';
import {CovoiturageDetailComponent} from './covoiturage-detail/covoiturage-detail.component';
import {AddCovoiturageComponent} from './add-covoiturage/add-covoiturage.component';

const routes: Routes = [
  {
    path: '',
    component: CovoituragePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CovoituragePage, CovoiturageDetailComponent, AddCovoiturageComponent],
  entryComponents: [CovoiturageDetailComponent, AddCovoiturageComponent]
})
export class CovoituragePageModule {}
