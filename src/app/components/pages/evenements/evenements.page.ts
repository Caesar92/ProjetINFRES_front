import {Component, OnInit} from '@angular/core';
import {EvenementService} from '../../../shared/services/evenement.service';
import {BehaviorSubject} from 'rxjs';
import {Evenement} from '../../../shared/models/evenement';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.page.html',
  styleUrls: ['./evenements.page.scss'],
})
export class EvenementsPage implements OnInit {

  private _evenements: BehaviorSubject<Evenement[]> = new BehaviorSubject<Evenement[]>([]);

  constructor(private eventService: EvenementService) {
  }

  ngOnInit() {
    this.eventService.getEvenements().subscribe(result => {
     this._evenements.next(result);
     console.log(this.evenements);
    }, error => {
      console.log('error');
    });
  }

  /**
   * Récupère la liste des recommandations
   */
  public get evenements(): Evenement[] {
    return this._evenements.getValue();
  }

}
