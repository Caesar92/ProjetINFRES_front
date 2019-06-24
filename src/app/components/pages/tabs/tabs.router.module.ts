import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'evenements',
        children: [
          {
            path: '',
            loadChildren: './evenements/evenements.module#EvenementsPageModule'
          }
        ]
      },
      {
        path: 'covoiturage',
        children: [
          {
            path: '',
            loadChildren: './covoiturage/covoiturage.module#CovoituragePageModule'
          }
        ]
      },
      {
        path: 'boncoin',
        children: [
          {
            path: '',
            loadChildren: './boncoin/boncoin.module#BoncoinPageModule'
          }
        ]
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: './account/account.module#AccountPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/evenements',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/evenements',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
