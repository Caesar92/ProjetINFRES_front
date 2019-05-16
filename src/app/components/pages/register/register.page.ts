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

      password: ['', Validators.required]
    });

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
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;

    /*this.auth.login('password', 'fgfdgdf', 'gdfgfd').subscribe(
      resolve => {
        console.log(resolve);
        // console.log(this.appState.token);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      });
      */
  }
}
