import {Injectable} from '@angular/core';
import {AppStateService} from './app-state.service';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  protected webservicesUrl = 'http://demo1558396.mockable.io/';

  protected useMocks = false;

  protected constructor(protected http: HttpClient, protected appState: AppStateService) {
    // this.webservicesUrl = environment.wsUrl;
    this.useMocks = environment.mocks;

  }

  protected get headers(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    if (this.appState.token !== null) {
      headers = headers.set('Authorization', 'Bearer ' + this.appState.token);
    }


    return headers;
  }


  /**
   * Appel GET
   */
  protected get<T>(path: string, params: any): Observable<T> {
    console.log(path);

    console.log("get req");
    return this.http.get<T>((path.indexOf('data') === 0 ? '' : this.webservicesUrl) + path, {
      headers: this.headers,
      responseType: 'json',
      withCredentials: true,
      observe: 'response'
    }).pipe(
      tap((res) => console.log('HTTP GET - ' + path)),
      map((response: HttpResponse<T>) => (response.body)),
      catchError(this.handleError(path)),
    );
  }

  /**
   * Gestion basique des erreurs
   */
  protected handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      const obs: Observable<T> = new Observable<T>(observer => {
        observer.error(error);
        console.log(error);
        observer.next(error);
      });
      // Let the app keep running by returning an empty or null result (to be defined by method call).
      return obs;
      /*of(result as T)*/
    };
  }

  /**
   * tt
   * @param path
   * @param params
   */
  protected mapParameters(path: string, params?: object): string {
    console.log(path);
    console.log(params);
    if (params) {
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          if (!this.useMocks) {
            path = path.replace(':' + key, params[key]);
          } else {
            path = path.replace(':' + key, '1');
          }
        }
      }
    }

    return path;
  }
}
