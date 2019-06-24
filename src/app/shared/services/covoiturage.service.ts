import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppStateService} from './app-state.service';
import {Observable} from 'rxjs';
import {Evenement} from '../models/evenement';
import {isArray} from 'util';
import {RestService} from './rest.service';
import {Covoiturage} from '../models/covoiturage';

@Injectable({
  providedIn: 'root'
})
export class CovoiturageService extends RestService{
  constructor(protected http: HttpClient, protected appState: AppStateService) {
    super(http, appState);
  }

  /**
   * Récupération des évenements
   */
  public getCovoiturages(): Observable<Covoiturage[]> {
    return new Observable<Covoiturage[]>(observer => {
      this.get<any>('api/trajets', {}).subscribe(result => {
        const covoiturages: Covoiturage[] = [];
        if (result.data && isArray(result.data)) {
          for (const covoiturage of result.data) {
            console.log(covoiturage);
            covoiturages.push(covoiturage as Covoiturage);
          }
        }
        observer.next(covoiturages);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }


  public addCovoiturage(data): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.post<any>('api/trajets', {}, data).subscribe(result => {
        observer.next(true);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }
}
