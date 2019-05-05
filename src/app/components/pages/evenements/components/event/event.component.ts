import {Component, Input, OnInit} from '@angular/core';
import {Evenement} from '../../../../../shared/models/evenement';

@Component({
  selector: 'evenement',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {

  /**
   * Recommandation à afficher
   */
  @Input()
  public evenement: Evenement;

  constructor() {
  }

  ngOnInit() {
  }

}
