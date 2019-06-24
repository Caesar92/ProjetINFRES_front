import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {EvenementService} from '../../../../../shared/services/evenement.service';

@Component({
  selector: 'app-add-evenement',
  templateUrl: './add-evenement.component.html',
  styleUrls: ['./add-evenement.component.scss'],
})
export class AddEvenementComponent implements OnInit {

  private addEventForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private eventService: EvenementService) { }

  ngOnInit() {

    this.addEventForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      lieu: [''],
      dateDebut: [''],
      dateFin: [''],
      limiteParticipants: ['']
    });
  }


  onSubmit() {
    console.log(this.addEventForm.controls.dateDebut);
    if (this.addEventForm.invalid) {
      return;
    }

    console.log('submit');
    let data = {
      titre: this.addEventForm.controls.title.value,
      description: this.addEventForm.controls.description.value,
      lieu: this.addEventForm.controls.lieu.value,
      date: this.addEventForm.controls.dateDebut.value,
      limiteParticipants: this.addEventForm.controls.limiteParticipants.value,
    };

    this.eventService.addEvenement(data).subscribe(
      resolve => {
        console.log(resolve);
        // console.log(this.appState.token);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      });
  }

}
