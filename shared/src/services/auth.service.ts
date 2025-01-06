import { AppConfig } from '../app-config';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Account,
  OAuthSignInPayload,
  SignInPayload,
  SignUpPayload,
  Tokens,
} from '../models';
import { BaseResponse } from '../models/base-response.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private httpClient = inject(HttpClient);
  private appConfig = inject(AppConfig);
  private baseUrl = this.appConfig.apiUrl;

  fastSignIn(payload: string) {
    return this.httpClient.post<BaseResponse<Account>>(
      `${this.baseUrl()}auth/authenticate`,
      { token: payload }
    );
  }

  signIn(payload: SignInPayload) {
    return this.httpClient.post<BaseResponse<Account>>(
      `${this.baseUrl()}auth/signIn`,
      payload
    );
  }

  signUp(payload: SignUpPayload) {
    return this.httpClient.post<BaseResponse<Account>>(
      `${this.baseUrl()}auth/signUp`,
      payload
    );
  }

  oauthSignIn(payload: OAuthSignInPayload) {
    return this.httpClient.post<BaseResponse<Account>>(
      `${this.baseUrl()}auth/oauth`,
      payload
    );
  }

  refreshToken(payload: string) {
    return this.httpClient.post<BaseResponse<Tokens>>(
      `${this.baseUrl()}auth/refreshToken`,
      { refreshToken: payload }
    );
  }
}
