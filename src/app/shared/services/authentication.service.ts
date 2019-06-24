import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {AppStateService} from './app-state.service';
import {forkJoin, Observable} from 'rxjs';
import {RestService} from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends RestService {

  constructor(protected http: HttpClient, protected appState: AppStateService) {
    super(http, appState);
  }

  public createClient(grantType: string, redirectUri: string): Observable<boolean> {
    const data = {'grant-type': grantType, 'redirect-uri': redirectUri};
    const obs: Observable<boolean> = new Observable<boolean>(observer => {
      // Post qui renvoie un client_id et client_secret
      this.post<{ client_id: string, client_secret: string }>('createClient', {},
        data).subscribe(result => {

        if (result && result.client_id) {
          this.appState.setClientId(result.client_id);
        }
        if (result && result.client_secret) {
          this.appState.setClientSecret(result.client_secret);
        }

        console.log(result);

        observer.next(true);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });


    return obs;
  }


  public login(grantType: string, username: string, password: string): Observable<boolean> {
    let data = {};
    const obs: Observable<boolean> = new Observable<boolean>(observer => {
      this.createClient('password', '/').subscribe(
        resolve => {
          forkJoin([
            this.appState.getClientId(),
            this.appState.getClientSecret()
          ]).subscribe(t => {
            console.log(t);
            const clientId = t[0];
            const clientSecret = t[1];

            data = {
              client_id: clientId,
              client_secret: clientSecret,
              grant_type: grantType,
              username,
              password
            };

            // Envoie requête
            this.post<{ access_token: string, expires_in: number, token_type: string, scope: string, refresh_token: string }>(
              'oauth/v2/token', {}, data).subscribe(result => {
              if (result && result.access_token) {
                this.appState.setToken(result.access_token);
              }
              if (result && result.refresh_token) {
                this.appState.setRefreshToken(result.refresh_token);
              }
              console.log(result);
              observer.next(true);
              observer.complete();
            }, err => {
              observer.error(err);
              observer.complete();
            });
          }, error => {
            observer.error(error);
            observer.complete();
          });

        },
        (error: HttpErrorResponse) => {
          console.log(error);
        });
    });

    return obs;
  }

  public register(user: any): Observable<boolean> {
    console.log(user);
    const obs: Observable<boolean> = new Observable<boolean>(observer => {
      this.post<{}>('auth/register', {}, user).subscribe(result => {
        observer.next(true);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });

    return obs;
  }
}
