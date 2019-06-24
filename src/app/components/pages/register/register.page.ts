import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../shared/services/authentication.service';
import {Router} from '@angular/router';
import {AppStateService} from '../../../shared/services/app-state.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  /**
   * Form soumis ?
   */
  public submitted = false;

  public choosenGender = undefined;

  /**
   * Formulaire de connexion
   */
  public registerForm: FormGroup;

  /**
   * Connexion en cours
   */
  public loading: boolean;

  constructor(private formBuilder: FormBuilder, private auth: AuthenticationService, private router: Router,
              protected appState: AppStateService) {
  }

  /**
   * Initialise le formulaire
   */
  public ngOnInit(): void {
    this.loading = false;
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      // promotion: ['', Validators.required],
      // birthdate: ['', [Validators.required]],
      password: ['', Validators.required],
      password_confirm: ['', Validators.required],
    });
    this.registerForm.setValidators([this.passwordValidator, /*this.ageValidator,*/ this.genderValidator.bind(this)]);
  }

  /**
   * Change le choix du genre (homme/femme)
   */
  public switchGender(gender: string): void {
    this.choosenGender = gender;
    // Relance la validation du formulaire
    this.registerForm.updateValueAndValidity();
  }

  /**
   * Vérifie si les deux champs mot de passe sont identiques
   */
  public passwordValidator(form: FormGroup): any {
    const pass = form.controls.password.value;
    const confirmPass = form.controls.password_confirm.value;

    return (pass === confirmPass ? null : {notSame: true});
  }

  /**
   * Vérifie que l'utilisateur a 15 ans
   */
  public ageValidator(form: FormGroup): any {
    const birthdate = new Date(form.controls.birthdate.value);
    const min_date = new Date();
    min_date.setFullYear(min_date.getFullYear() - 15);

    return (birthdate.getTime() < min_date.getTime() ? null : {minAge: true});
  }


  /**
   * Vérifie qu'un genre a été choisi
   */
  public genderValidator(form: FormGroup): any {
    return (this.choosenGender !== undefined ? null : {notGender: true});
  }


  /**
   *  Fonction qui renvoie le formulaire
   */
  public get f(): any {
    return this.registerForm.controls;
  }

  /**
   * Submit du formulaire de connexion
   */
  public onSubmit(): void {
    this.submitted = true;
    console.log("onSubmit");
    if (this.registerForm.invalid) {
      console.log(this.registerForm);
      return;
    }

    console.log(this.registerForm);
    this.loading = true;

    const user = {
      email: this.registerForm.controls.email.value,
      username: this.registerForm.controls.firstname.value,
      password: this.registerForm.controls.password.value,
    };

    this.auth.register(user).subscribe(
      resolve => {
        console.log(resolve);
        // console.log(this.appState.token);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      });

  }
}
