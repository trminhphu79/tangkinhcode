import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  KeyLanguage,
  TranslateService,
  LangeCode,
  TranslatePipe,
} from '@tangkinhcode/shared/language';

@Component({
  selector: 'pk-side-bar',
  imports: [TranslatePipe],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent {
  keyLanguage = KeyLanguage;
  translateService = inject(TranslateService);

  changeLange() {
    this.translateService.setCurrentLangCode(LangeCode.EN);
  }
}
