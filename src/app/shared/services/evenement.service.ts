import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {isArray} from 'util';

import {RestService} from './rest.service';
import {Evenement} from '../models/evenement';
import {AppStateService} from './app-state.service';

@Injectable({
  providedIn: 'root'
})
export class EvenementService extends RestService {
  constructor(protected http: HttpClient, protected appState: AppStateService) {
    super(http, appState);
  }

  /**
   * Récupération des évenements
   */
  public getEvenements(): Observable<Evenement[]> {
    return new Observable<Evenement[]>(observer => {
      this.get<any>('api/events', {}).subscribe(result => {
        const evenements: Evenement[] = [];
        if (result.data && isArray(result.data)) {
          for (const evenement of result.data) {
            console.log(evenement);
            evenements.push(evenement as Evenement);
          }
        }
        observer.next(evenements);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }


  public addEvenement(data): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.post<any>('api/events', {}, data).subscribe(result => {
        observer.next(true);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }

}
