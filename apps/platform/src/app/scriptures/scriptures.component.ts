import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScriptureStore } from './store/store';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'pk-scriptures',
  imports: [ButtonModule, RouterOutlet],
  templateUrl: './scriptures.component.html',
  styleUrl: './scriptures.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScripturesComponent {
  private scriptureStore = inject(ScriptureStore);

  protected count = this.scriptureStore.count;
  protected scriptures = this.scriptureStore.scriptures;

  protected createScripture() {
    this.scriptureStore.createScripture();
  }
}
