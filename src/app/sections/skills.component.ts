import { Component } from '@angular/core';
import { CERTS, SKILLS } from '../data/profile';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="skills">
      <div class="wrap">
        <p class="label">03 / skills</p>
        <h2>What I work with.</h2>

        <div class="groups">
          @for (g of skills; track g.group) {
            <div class="group" appReveal>
              <h3>{{ g.group }}</h3>
              <ul>
                @for (s of g.items; track s) {
                  <li>{{ s }}</li>
                }
              </ul>
            </div>
          }
        </div>

        <h3 class="sub">Certifications</h3>
        <ul class="certs">
          @for (c of certs; track c.name) {
            <li appReveal>
              <span class="year">{{ c.date }}</span>
              <span class="name">{{ c.name }}</span>
              <span class="issuer">{{ c.issuer }}</span>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    .groups {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1px;
      background: var(--line);
      border: 1px solid var(--line);
    }
    .group { background: var(--bg); padding: 24px; }
    h3 {
      font-family: var(--mono);
      font-size: 13px;
      font-weight: 400;
      color: var(--muted);
      margin: 0 0 16px;
    }
    .group ul { list-style: none; padding: 0; margin: 0; }
    .group li { padding: 4px 0; font-weight: 500; }

    .sub { margin-top: 64px; }
    .certs { list-style: none; padding: 0; margin: 0; }
    .certs li {
      display: grid;
      grid-template-columns: 64px 1fr auto;
      gap: 16px;
      padding: 14px 0;
      border-bottom: 1px solid var(--line);
    }
    .year, .issuer { font-family: var(--mono); font-size: 13px; color: var(--muted); }
    .year { color: var(--accent); }

    @media (max-width: 860px) {
      .groups { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 520px) {
      .groups { grid-template-columns: 1fr; }
      .certs li { grid-template-columns: 48px 1fr; }
      .issuer { grid-column: 2; }
    }
  `,
})
export class SkillsComponent {
  skills = SKILLS;
  certs = CERTS;
}
