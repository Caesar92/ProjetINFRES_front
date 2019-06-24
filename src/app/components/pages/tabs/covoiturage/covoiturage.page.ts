import { Component, OnInit } from '@angular/core';
import {CovoiturageService} from '../../../../shared/services/covoiturage.service';
import {Covoiturage} from '../../../../shared/models/covoiturage';
import {ModalController} from '@ionic/angular';
import {AddCovoiturageComponent} from './add-covoiturage/add-covoiturage.component';
import {CovoiturageDetailComponent} from './covoiturage-detail/covoiturage-detail.component';

@Component({
  selector: 'app-covoiturage',
  templateUrl: './covoiturage.page.html',
  styleUrls: ['./covoiturage.page.scss'],
})
export class CovoituragePage implements OnInit {

  private covoiturages: Covoiturage[];

  constructor(private covoitService: CovoiturageService, private modalController: ModalController) {}

  ngOnInit() {
    this.covoitService.getCovoiturages().subscribe(result => {
      this.covoiturages = result;
      console.log(result);
    }, error => {
      console.log('error');
    });
  }

  async openDetail(covoit): Promise<any> {
    const modal = await this.modalController.create({
      component: CovoiturageDetailComponent,
      componentProps: {
        covoit: covoit
      }
    });
    return modal.present();
  }

  async openAddCovoiturage(): Promise<any> {
    const modal = await this.modalController.create({
      component: AddCovoiturageComponent,
    });
    return modal.present();
  }

}
