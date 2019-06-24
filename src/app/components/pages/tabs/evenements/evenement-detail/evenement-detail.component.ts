import {Component, Input, OnInit} from '@angular/core';
import {Evenement} from '../../../../../shared/models/evenement';

@Component({
  selector: 'app-evenement-detail',
  templateUrl: './evenement-detail.component.html',
  styleUrls: ['./evenement-detail.component.scss'],
})
export class EvenementDetailComponent implements OnInit {

  @Input('evenement') evenement: Evenement;
  constructor() { }

  ngOnInit() {
    console.log(this.evenement);
  }

}
