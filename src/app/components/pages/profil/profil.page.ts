import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  /** Form soumis ? */
  public submitted = false;

  /** Formulaire de connexion */
  public profilDetailForm: FormGroup;
  public profilVoitureForm: FormGroup;
  public profilPasswordForm: FormGroup;

  /** Connexion en cours0  */
  public loading: boolean;

  //Variable
  showPassword = false;
  isenabled = true;

  constructor(private formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    this.loading = false;
    this.profilDetailForm = this.formBuilder.group({
      genre: ['Homme', [Validators.required]],
      prenom: ['César', [Validators.required]],
      nom: ['Gonnot', [Validators.required]],
      promotion: ['INFRES 11', [Validators.required]],
      dateNaissance: ['17/03/1997', [Validators.required]],
      telephone: ['0605393538', [Validators.required]],
      email: ['cesar.gonnot@orange.fr', [Validators.required, Validators.email]],
      rememberMe: [],
    });

    this.profilVoitureForm = this.formBuilder.group({
      marque: ['Toyota', [Validators.required]],
      modele: ['Supra', [Validators.required]],
      couleur: ['Noir', [Validators.required]],
      rememberMe: [],
    });

    this.profilPasswordForm = this.formBuilder.group({
      password: ['Gonnot', [Validators.required]],
      rememberMe: [],
    });
  }

  modifierInformations(){
    this.isenabled = !this.isenabled;
    this.showPassword = !this.showPassword
  }
}
