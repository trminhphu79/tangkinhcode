import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pk-oauth-redirect',
  imports: [CommonModule],
  templateUrl: './oauth-redirect.component.html',
  styleUrl: './oauth-redirect.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OauthRedirectComponent {}
