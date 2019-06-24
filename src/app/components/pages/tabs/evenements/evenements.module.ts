import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EvenementsPage } from './evenements.page';
import {EvenementDetailComponent} from './evenement-detail/evenement-detail.component';
import {AddEvenementComponent} from './add-evenement/add-evenement.component';
import {TranslateModule} from '@ngx-translate/core';

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
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule
  ],
  declarations: [EvenementsPage, EvenementDetailComponent, AddEvenementComponent],
  entryComponents: [EvenementDetailComponent, AddEvenementComponent]
})
export class EvenementsPageModule {}
