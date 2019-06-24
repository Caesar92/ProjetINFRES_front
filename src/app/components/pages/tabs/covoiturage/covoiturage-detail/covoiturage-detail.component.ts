import {Component, Input, OnInit} from '@angular/core';
import {Covoiturage} from '../../../../../shared/models/covoiturage';

@Component({
  selector: 'app-covoiturage-detail',
  templateUrl: './covoiturage-detail.component.html',
  styleUrls: ['./covoiturage-detail.component.scss'],
})
export class CovoiturageDetailComponent implements OnInit {

  @Input('covoit') covoit: Covoiturage;
  constructor() { }

  ngOnInit() {}

}
