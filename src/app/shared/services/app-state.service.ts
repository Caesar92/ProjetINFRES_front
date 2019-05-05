import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  /**
   * Token authentification
   */
  private _token: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  /**
   * Refresh token
   */
  private _refreshToken: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  /**
   * Clé localstorage token
   */
  private readonly LS_TOKEN: string = 'token';

  constructor() {
  }

  /**
   * Get Token
   */
  public get token(): string {
    return this._token.getValue();
  }

  /**
   * Set Token
   */
  public set token(value: string) {
    if (!value) {
      localStorage.removeItem(this.LS_TOKEN);
    } else {
      localStorage.setItem(this.LS_TOKEN, value);
    }
    this._token.next(value);
  }
}
