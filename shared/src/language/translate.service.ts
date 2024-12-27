import { Injectable } from '@angular/core';
import { BehaviorSubject, share, shareReplay } from 'rxjs';

export enum LangeCode {
  VI = 'VI',
  EN = 'EN',
}

@Injectable({ providedIn: 'root' })
export class TranslateService {
  private language$ = new BehaviorSubject<LangeCode>(LangeCode.VI);

  public langeChanges$ = this.language$.asObservable().pipe();

  setCurrentLangCode(code: LangeCode) {
    this.language$.next(code);
  }
}
