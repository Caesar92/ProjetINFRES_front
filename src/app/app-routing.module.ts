import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './components/pages/tabs/tabs.module#TabsPageModule'},
  {
    path: 'event-details',
    loadChildren: './components/pages/evenements/components/event-details/event-details.module#EventDetailsPageModule'
  },
  { path: 'login', loadChildren: './components/pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './components/pages/register/register.module#RegisterPageModule' },
  //{ path: 'profil', loadChildren: './components/pages/profil/profil.module#ProfilPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
