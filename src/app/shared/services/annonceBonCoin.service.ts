import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {isArray} from 'util';

import {RestService} from './rest.service';
import {AnnonceBonCoin} from '../models/annonceBonCoin';
import {AppStateService} from './app-state.service';

@Injectable({
  providedIn: 'root'
})
export class AnnonceBonCoinService extends RestService {

  /**
   * Prix maximum utilisé comme valeur maximum pour le slider de prix dans les filtres
   */
  public static readonly PRICE_MAX = 200;

  constructor(protected http: HttpClient, protected appState: AppStateService) {
    super(http, appState);
  }

  /**
   * Récupération des évenements
   */
  public getEvenements(): Observable<AnnonceBonCoin[]> {
    return new Observable<AnnonceBonCoin[]>(observer => {
      this.get<any>('api/evenements', {}).subscribe(result => {
        const evenements: AnnonceBonCoin[] = [];
        if (result.evenements && isArray(result.evenements)) {
          for (const evenement of result.evenements) {
            evenements.push(new AnnonceBonCoin({
              id: evenement.id,
              title: evenement.title,
              image: evenement.image,
              startDate: new Date(evenement.startDate),
              endDate: new Date(evenement.endDate),
              summary: evenement.summary,
              content: evenement.content,
            }));
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

}
