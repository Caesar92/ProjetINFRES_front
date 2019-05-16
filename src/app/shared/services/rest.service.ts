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

  protected webservicesUrl = 'http://localhost/';

  protected useMocks = false;

  protected constructor(protected http: HttpClient, protected appState: AppStateService) {
    // this.webservicesUrl = environment.wsUrl;
    this.useMocks = environment.mocks;

  }

  protected get headers(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.appState.getToken().then(token => {
      headers = headers.set('Authorization', 'Bearer ' + token);
    });

    return headers;
  }


  /**
   * Appel GET
   */
  protected get<T>(path: string, params: any): Observable<T> {
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
   * Appel POST
   */
  protected post<T>(path: string, params: any, data: object): Observable<T> {

    const httpParams: HttpParams = new HttpParams({fromObject: params});
    let urlParams = httpParams.toString();
    if (urlParams) {
      urlParams = urlParams.replace(/%5B%5D/g, '[]');
    }
    return this.http.post<T>(this.webservicesUrl + this.mapParameters(path, params) + '?' + urlParams, data, {
        headers: this.headers,
        responseType: 'json',
        withCredentials: true,
        observe: 'response'
      }
    ).pipe(
      tap((res) => console.log('HTTP POST - ' + path)),
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
   */
  protected mapParameters(path: string, params?: object): string {
    if (params) {
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          path = path.replace(':' + key, params[key]);
        }
      }
    }
    return path;
  }
}
