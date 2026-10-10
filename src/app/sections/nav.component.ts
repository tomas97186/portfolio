import { AfterViewInit, Component, HostListener, OnDestroy, signal } from '@angular/core';
import { LangSwitchComponent } from '../i18n/lang-switch.component';
import { TPipe } from '../i18n/t.pipe';
import { UI } from '../i18n/ui';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [LangSwitchComponent, TPipe],
  template: `
    <header [class.scrolled]="scrolled()">
      <div class="wrap bar">
        <a href="#top" class="logo">tc<span>.</span></a>

        <div class="right">
          <nav [class.open]="open()">
            @for (id of links; track id) {
              <a [href]="'#' + id" [class.active]="active() === id" (click)="open.set(false)">
                {{ ui.section[id] | t }}
              </a>
            }
          </nav>

          <app-lang-switch />

          <button class="toggle" (click)="open.set(!open())" [attr.aria-expanded]="open()" aria-label="Menu">
            <span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  `,
  styles: `
    header {
      position: fixed;
      inset: 0 0 auto 0;
      z-index: 10;
      transition: background .2s, border-color .2s;
      border-bottom: 1px solid transparent;
    }
    header.scrolled {
      background: color-mix(in srgb, var(--bg) 88%, transparent);
      backdrop-filter: blur(8px);
      border-color: var(--line);
    }
    .bar { display: flex; align-items: center; justify-content: space-between; height: 64px; }
    .logo { font-family: var(--mono); font-weight: 500; font-size: 20px; text-decoration: none; }
    .logo span { color: var(--accent); }

    .right { display: flex; align-items: center; gap: 28px; }
    app-lang-switch { color: var(--muted); }
    nav { display: flex; gap: 28px; }
    nav a {
      font-family: var(--mono);
      font-size: 14px;
      text-decoration: none;
      color: var(--muted);
      transition: color .15s;
    }
    nav a:hover, nav a.active { color: var(--ink); }
    nav a.active::before { content: '/'; color: var(--accent); margin-right: 2px; }

    .toggle { display: none; background: none; border: 0; padding: 8px; cursor: pointer; }
    .toggle span { display: block; width: 22px; height: 2px; background: var(--ink); margin: 5px 0; }

    @media (max-width: 720px) {
      .right { gap: 8px; }
      .toggle { display: block; }
      nav {
        display: none;
        position: absolute;
        top: 64px; left: 0; right: 0;
        flex-direction: column;
        gap: 0;
        background: var(--bg);
        border-bottom: 1px solid var(--line);
      }
      nav.open { display: flex; }
      nav a { padding: 14px 16px; }
    }
  `,
})
export class NavComponent implements AfterViewInit, OnDestroy {
  ui = UI;
  links = Object.keys(UI.section) as (keyof typeof UI.section)[];

  scrolled = signal(false);
  open = signal(false);
  active = signal('');

  private observer?: IntersectionObserver;

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 20);
  }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (e.isIntersecting) this.active.set(e.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    this.links.forEach(id => {
      const el = document.getElementById(id);
      if (el) this.observer!.observe(el);
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
