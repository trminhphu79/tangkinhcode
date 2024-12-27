import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'pk-root',
  template: '<router-outlet />',
})
export class AppComponent {
  title = 'platform';
}
