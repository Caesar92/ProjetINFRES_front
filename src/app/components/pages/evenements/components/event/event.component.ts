import {Component, Input, OnInit} from '@angular/core';
import {Evenement} from '../../../../../shared/models/evenement';
import {ModalController} from '@ionic/angular';
import {EventDetailsPage} from '../event-details/event-details.page';


@Component({
  selector: 'evenement',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {

  /**
   * Evenement à afficher
   */
  @Input()
  public evenement: Evenement;

  constructor(public modalController: ModalController) {
  }

  ngOnInit() {
  }

  async openDetail(): Promise<any> {
    const modal = await this.modalController.create({
      component: EventDetailsPage
    });
    return modal.present();
  }

}
