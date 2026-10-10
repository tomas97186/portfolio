import { Component } from '@angular/core';
import { ABOUT } from '../data/profile';
import { RevealDirective } from '../shared/reveal.directive';
import { TPipe } from '../i18n/t.pipe';
import { UI } from '../i18n/ui';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective, TPipe],
  template: `
    <section id="about">
      <div class="wrap grid">
        <div>
          <p class="label">01 / {{ ui.section.about | t }}</p>
          <h2 [innerHTML]="ui.about.title | t"></h2>
        </div>
        <div class="text" appReveal>
          @for (par of paragraphs; track $index) {
            <p>{{ par | t }}</p>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 64px; }
    .text p { margin: 0 0 20px; color: var(--muted); }
    .text p:first-child { color: var(--ink); font-size: 20px; }
    @media (max-width: 800px) {
      .grid { grid-template-columns: 1fr; gap: 0; }
    }
  `,
})
export class AboutComponent {
  paragraphs = ABOUT;
  ui = UI;
}
