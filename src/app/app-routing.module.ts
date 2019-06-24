import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './shared/guards/auth.guard';

const routes: Routes = [
  {path: '', loadChildren: './components/pages/tabs/tabs.module#TabsPageModule', canActivate: [AuthGuard]},
  {path: 'login', loadChildren: './components/pages/login/login.module#LoginPageModule'},
  {path: 'register', loadChildren: './components/pages/register/register.module#RegisterPageModule'},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
