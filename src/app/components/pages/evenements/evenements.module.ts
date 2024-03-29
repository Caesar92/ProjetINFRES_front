import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EvenementsPage } from './evenements.page';
import {EventComponent} from './components/event/event.component';

const routes: Routes = [
  {
    path: '',
    component: EvenementsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [EvenementsPage, EventComponent]
})
export class EvenementsPageModule {}
