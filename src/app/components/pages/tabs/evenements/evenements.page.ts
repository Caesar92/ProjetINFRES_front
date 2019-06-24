import {Component, OnInit} from '@angular/core';
import {EvenementService} from '../../../../shared/services/evenement.service';
import {BehaviorSubject} from 'rxjs';
import {Evenement} from '../../../../shared/models/evenement';
import {ModalController} from '@ionic/angular';
import {EvenementDetailComponent} from './evenement-detail/evenement-detail.component';
import {AddEvenementComponent} from './add-evenement/add-evenement.component';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.page.html',
  styleUrls: ['./evenements.page.scss'],
})
export class EvenementsPage implements OnInit {

  private evenements: Evenement[];

  constructor(private eventService: EvenementService, private modalController: ModalController) {
  }

  ngOnInit() {
    this.eventService.getEvenements().subscribe(result => {
     this.evenements = result;
     console.log(result);
    }, error => {
      console.log('error');
    });
  }

  async openDetail(event): Promise<any> {
    const modal = await this.modalController.create({
      component: EvenementDetailComponent,
      componentProps: {
        evenement: event
      }
    });
    return modal.present();
  }

  async openAddEvenement(): Promise<any> {
    const modal = await this.modalController.create({
      component: AddEvenementComponent,
    });
    return modal.present();
  }

}
