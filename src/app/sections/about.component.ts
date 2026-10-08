import { Component } from '@angular/core';
import { ABOUT } from '../data/profile';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="about">
      <div class="wrap grid">
        <div>
          <p class="label">01 / about</p>
          <h2>From owning integrations<br>to leading a team.</h2>
        </div>
        <div class="text" appReveal>
          @for (par of paragraphs; track $index) {
            <p>{{ par }}</p>
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
}
