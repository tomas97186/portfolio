import { Component } from '@angular/core';
import { EDUCATION, LANGUAGES } from '../data/profile';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="education">
      <div class="wrap">
        <p class="label">04 / education</p>
        <h2>Background.</h2>

        <div class="grid">
          @for (e of education; track e.title) {
            <article appReveal>
              <span class="years">{{ e.years }}</span>
              <h3>{{ e.title }}</h3>
              <p class="school">{{ e.school }}</p>
              <p class="note">{{ e.note }}</p>
            </article>
          }

          <article appReveal>
            <span class="years">languages</span>
            @for (l of languages; track l.name) {
              <div class="lang">
                <h3>{{ l.name }}</h3>
                <p class="school">{{ l.level }}</p>
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
}
