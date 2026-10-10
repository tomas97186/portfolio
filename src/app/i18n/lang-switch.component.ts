import { Component, inject } from '@angular/core';
import { I18n, LANGS } from './i18n.service';

@Component({
  selector: 'app-lang-switch',
  standalone: true,
  template: `
    @for (l of langs; track l) {
      <button
        type="button"
        [class.active]="i18n.lang() === l"
        [attr.aria-pressed]="i18n.lang() === l"
        (click)="i18n.set(l)"
      >{{ l }}</button>
    }
  `,
  styles: `
    :host {
      display: inline-flex;
      font-family: var(--mono);
      font-size: 13px;
    }
    button {
      font: inherit;
      background: none;
      border: 0;
      padding: 4px 6px;
      color: inherit;
      opacity: 0.5;
      cursor: pointer;
    }
    button + button::before {
      content: '/';
      margin-right: 6px;
      opacity: 0.5;
    }
    button.active {
      opacity: 1;
      color: var(--accent);
    }
  `,
})
export class LangSwitchComponent {
  i18n = inject(I18n);
  langs = LANGS;
}
