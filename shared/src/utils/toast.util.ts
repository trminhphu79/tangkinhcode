import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

type ToastContent = {
  title?: string;
  detail?: string;
};

enum ToastSeverity {
  SUCCESS = 'success',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
}

@Injectable({
  providedIn: 'root',
})
export class ToastUtil {
  private msgService = inject(MessageService);

  #showToast(severity: ToastSeverity, data: ToastContent): void {
    this.msgService.add({
      severity: severity,
      summary: data.title,
      detail: data.detail,
    });
  }

  showSuccess(data: ToastContent): void {
    this.#showToast(ToastSeverity.SUCCESS, data);
  }
  showError(data: ToastContent): void {
    this.#showToast(ToastSeverity.ERROR, data);
  }
  showInfo(data: ToastContent): void {
    this.#showToast(ToastSeverity.INFO, data);
  }
  showWarn(data: ToastContent): void {
    this.#showToast(ToastSeverity.WARN, data);
  }
}
