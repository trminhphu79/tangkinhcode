import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class OAuthService {
  private httpClient = inject(HttpClient);

  signIn<T>(url: string, params: T) {
    return this.httpClient.post(url, params);
  }
}
