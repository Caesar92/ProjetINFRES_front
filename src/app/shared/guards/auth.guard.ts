import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AppStateService} from '../services/app-state.service';
import {AuthenticationService} from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public appState: AppStateService, public auth: AuthenticationService,
              public router: Router) {
  }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(this.appState.token);
    console.log("test");
    // Charge les données utilisateurs si elles ne sont pas présentes
    if (!this.appState.token) {
      console.log('NOT READY');
      this.appState.getToken().then(
        resolve => {
          if (this.appState.token) {
            console.log('OK');
            return true;
          }
          console.log('RESOLVE PAS OK');
          this.appState.token = null;
          return false;
        }, () => {
          console.log('REJECTED');
          this.appState.token = null;
          this.router.navigate(['/login']);
          return false;
        }
      );
    }

    return true;
  }
}
