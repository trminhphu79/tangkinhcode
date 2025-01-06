import { Injectable } from '@angular/core';
import { Tokens } from '../models';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private token = 'token';

  getToken(): Tokens | null {
    const data = localStorage.getItem(this.token);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }

  setToken(data: Tokens) {
    localStorage.setItem(this.token, JSON.stringify(data));
  }

  clearToken() {
    localStorage.removeItem(this.token);
  }
}
