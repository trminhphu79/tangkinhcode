import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgressBarModule } from 'primeng/progressbar';
import { AuthStore } from '../../store';

@Component({
  selector: 'pk-oauth-redirect',
  imports: [ProgressBarModule],
  templateUrl: './oauth-redirect.component.html',
  styleUrl: './oauth-redirect.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OauthRedirectComponent implements OnInit {
  private authStore = inject(AuthStore);
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data: any) => {
      this.authStore.oauthSignIn({
        token: data.code,
        credentialType: 'GITHUB',
      });
    });
  }
}
