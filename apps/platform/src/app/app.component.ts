import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
@Component({
  imports: [RouterModule, ToastModule],
  selector: 'pk-root',
  template: `
    <router-outlet />
    <p-toast />
  `,
})
export class AppComponent {
  title = 'platform';
}
