import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OAuthService } from '@tangkinhcode/services/oauth';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pk-oauth-redirect',
  imports: [CommonModule],
  templateUrl: './oauth-redirect.component.html',
  styleUrl: './oauth-redirect.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OauthRedirectComponent {
  private oauthService = inject(OAuthService);

  private activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data: any) => {
      const url = 'http://localhost:3000/api/auth/oauth';

      // const url = 'https://github.com/login/oauth/access_token';
      // const params = {
      //   client_id: 'Ov23lis4b1cYWl1kueJv',
      //   client_secret: '743237bfa800c6d47e64ab62f31f5210733a63b9',
      //   code: data?.code,
      //   accept: 'json',
      //   redirect_uri: 'http://localhost:4200/auth'
      // };

      this.oauthService
        .signIn(url, { code: data.code, credentialType: 'GITHUB' })
        .subscribe((response) => {
          console.log('github auth response: ', response);
        });
    });
  }
}
