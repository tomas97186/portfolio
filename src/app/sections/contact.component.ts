import { Component, signal } from '@angular/core';
import { PROFILE } from '../data/profile';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contact">
      <div class="wrap">
        <p class="label">05 / contact</p>
        <h2 class="big">Let's build<br>something together.</h2>

        <div class="mail">
          <a [href]="'mailto:' + p.email">{{ p.email }}</a>
          <button (click)="copy()">{{ copied() ? 'copied!' : 'copy' }}</button>
        </div>

        <ul class="links">
          @if (p.linkedin) {
            <li><a [href]="p.linkedin" target="_blank" rel="noopener">LinkedIn ↗</a></li>
          }
          @if (p.github) {
            <li><a [href]="p.github" target="_blank" rel="noopener">GitHub ↗</a></li>
          }
          @if (p.credly) {
            <li><a [href]="p.credly" target="_blank" rel="noopener">Credly ↗</a></li>
          }
        </ul>
      </div>
    </section>

    <footer class="wrap">
      <span>© {{ year }} {{ p.name }}</span>
      <span>built with Angular</span>
    </footer>
  `,
  styles: `
    .big { font-size: clamp(36px, 7vw, 72px); margin-bottom: 40px; }
    .mail { display: flex; align-items: center; flex-wrap: wrap; gap: 16px; }
    .mail a {
      font-size: clamp(18px, 3vw, 26px);
      text-decoration-color: var(--accent);
      text-underline-offset: 6px;
      word-break: break-all;
    }
    .mail button {
      font-family: var(--mono);
      font-size: 12px;
      background: none;
      border: 1px solid var(--line);
      color: var(--muted);
      border-radius: 4px;
      padding: 6px 10px;
      cursor: pointer;
    }
    .mail button:hover { border-color: var(--ink); color: var(--ink); }

    .links { list-style: none; display: flex; gap: 24px; padding: 0; margin: 32px 0 0; }
    .links a { font-family: var(--mono); font-size: 14px; text-decoration: none; }
    .links a:hover { color: var(--accent); }

    footer {
      display: flex;
      justify-content: space-between;
      padding-top: 24px;
      padding-bottom: 32px;
      border-top: 1px solid var(--line);
      font-family: var(--mono);
      font-size: 12px;
      color: var(--muted);
    }
  `,
})
export class ContactComponent {
  p = PROFILE;
  year = new Date().getFullYear();
  copied = signal(false);

  copy() {
    navigator.clipboard?.writeText(this.p.email).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    });
  }
}
