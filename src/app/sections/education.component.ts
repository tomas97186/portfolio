import { Component } from '@angular/core';
import { EDUCATION, LANGUAGES } from '../data/profile';
import { RevealDirective } from '../shared/reveal.directive';
import { TPipe } from '../i18n/t.pipe';
import { UI } from '../i18n/ui';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RevealDirective, TPipe],
  template: `
    <section id="education">
      <div class="wrap">
        <p class="label">04 / {{ ui.section.education | t }}</p>
        <h2>{{ ui.education.title | t }}</h2>

        <div class="grid">
          @for (e of education; track e.years) {
            <article appReveal>
              <span class="years">{{ e.years }}</span>
              <h3>{{ e.title | t }}</h3>
              <p class="school">{{ e.school | t }}</p>
              <p class="note">{{ e.note | t }}</p>
            </article>
          }

          <article appReveal>
            <span class="years">{{ ui.education.languages | t }}</span>
            @for (l of languages; track $index) {
              <div class="lang">
                <h3>{{ l.name | t }}</h3>
                <p class="school">{{ l.level | t }}</p>
              </div>
            }
          </article>
        </div>
      </div>
    </section>
  `,
  styles: `
    .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    article {
      background: var(--bg-alt);
      border-radius: 6px;
      padding: 28px;
    }
    .years { font-family: var(--mono); font-size: 12px; color: var(--accent); }
    h3 { font-size: 19px; line-height: 1.3; margin: 10px 0 4px; }
    .school { margin: 0; color: var(--muted); font-size: 15px; }
    .note { margin: 16px 0 0; font-size: 14px; }
    .lang + .lang { margin-top: 12px; }

    @media (max-width: 860px) {
      .grid { grid-template-columns: 1fr; }
    }
  `,
})
export class EducationComponent {
  education = EDUCATION;
  languages = LANGUAGES;
  ui = UI;
}
