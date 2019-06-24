import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  /**
   * Clé localstorage token
   */
  private readonly LS_TOKEN: string = 'token';
  /**
   * Clé localstorage token
   */
  private readonly LS_REFRESH_TOKEN: string = 'refresh_token';
  /**
   * Clé localstorage Client Id
   */
  private readonly LS_CLIENT_ID: string = 'client_id';
  /**
   * Clé localstorage Client Secret
   */
  private readonly LS_CLIENT_SECRET: string = 'client_secret';

  constructor(private storage: Storage) {
  }

  /**
   * Get Token
   */
  public getToken() {
    return new Promise((resolve, reject) => {
      this.storage.get(this.LS_TOKEN).then((val) => {
        resolve(val);
      }).catch(ex => {
        reject(ex);
      });
    });
  }

  /**
   * Set Token
   */
  public setToken(value) {
    if (!value) {
      this.storage.remove(this.LS_TOKEN);
    } else {
      this.storage.set(this.LS_TOKEN, value);
    }
  }

  public getRefreshToken() {
    return new Promise((resolve, reject) => {
      this.storage.get(this.LS_REFRESH_TOKEN).then((val) => {
        resolve(val);
      }).catch(ex => {
        reject(ex);
      });
    });
  }

  public setRefreshToken(value) {
    if (!value) {
      this.storage.remove(this.LS_REFRESH_TOKEN);
    } else {
      this.storage.set(this.LS_REFRESH_TOKEN, value);
    }
  }

  public getClientId() {
    return new Promise((resolve, reject) => {
      this.storage.get(this.LS_CLIENT_ID).then((val) => {
        resolve(val);
      }).catch(ex => {
        reject(ex);
      });
    });
  }

  public setClientId(value: string) {
    if (!value) {
      this.storage.remove(this.LS_CLIENT_ID);
    } else {
      this.storage.set(this.LS_CLIENT_ID, value);
    }
  }

  public getClientSecret() {
    return new Promise((resolve, reject) => {
      this.storage.get(this.LS_CLIENT_SECRET).then((val) => {
        resolve(val);
      }).catch(ex => {
        reject(ex);
      });
    });
  }

  public setClientSecret(value) {
    if (!value) {
      this.storage.remove(this.LS_CLIENT_SECRET);
    } else {
      this.storage.set(this.LS_CLIENT_SECRET, value);
    }
  }
}
