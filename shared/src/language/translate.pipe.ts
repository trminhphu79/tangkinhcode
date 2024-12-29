import { ChangeDetectorRef, inject, Pipe, PipeTransform } from '@angular/core';
import { LangeCode, TranslateService } from './translate.service';
import { ViLanguage } from './vi';
import { EngLanguage } from './en';

@Pipe({
  name: 'tr',
  standalone: true,
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  private languageService = inject(TranslateService);
  private changeDetector = inject(ChangeDetectorRef);
  private currentCode!: LangeCode;

  constructor() {
    this.registerLangeChanges();
  }

  transform(key: string) {
    let returnValue = '';
    switch (this.currentCode) {
      case LangeCode.VI:
        returnValue = ViLanguage[key];
        break;
      default:
        returnValue = EngLanguage[key];
        break;
    }

    return returnValue ?? key;
  }

  private registerLangeChanges() {
    this.languageService.langeChanges$.subscribe((code: LangeCode) => {
      this.currentCode = code;
      this.changeDetector.markForCheck();
    });
  }
}
