import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AppStateService} from '../../../shared/services/app-state.service';
import {AuthenticationService} from '../../../shared/services/authentication.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  /**
   * Form soumis ?
   */
  public submitted = false;

  /**
   * Formulaire de connexion
   */
  public loginForm: FormGroup;

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
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [],
    });

  }

  /**
   *  Fonction qui renvoie le formulaire
   */
  public get f(): any {
    return this.loginForm.controls;
  }

  /**
   * Submit du formulaire de connexion
   */
  public onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;


    this.auth.login('password', this.loginForm.controls.email.value, this.loginForm.controls.password.value).subscribe(
      resolve => {
        console.log(resolve);
        console.log(this.appState.getToken());
        this.router.navigate(['tabs/evenements']);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      });
  }


}
