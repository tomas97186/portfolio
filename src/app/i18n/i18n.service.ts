import { Injectable, effect, signal } from '@angular/core';

export type Lang = 'en' | 'it';
export const LANGS: Lang[] = ['en', 'it'];

// Testo traducibile: una stringa semplice vale per tutte le lingue
export type Text = string | Record<Lang, string>;

const STORAGE_KEY = 'lang';

const isLang = (v: unknown): v is Lang => LANGS.includes(v as Lang);

// Priorità: ?lang=it nell'URL (usato da scripts/cv-pdf.mjs), poi la scelta salvata, poi la lingua del browser
function initialLang(): Lang {
  const fromUrl = new URLSearchParams(location.search).get('lang');
  if (isLang(fromUrl)) return fromUrl;

  let saved: string | null = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch {}
  if (isLang(saved)) return saved;

  return navigator.language?.toLowerCase().startsWith('it') ? 'it' : 'en';
}

@Injectable({ providedIn: 'root' })
export class I18n {
  readonly lang = signal<Lang>(initialLang());

  constructor() {
    effect(() => {
      document.documentElement.lang = this.lang();
    });
  }

  set(lang: Lang) {
    this.lang.set(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  }

  t(text: Text): string {
    return typeof text === 'string' ? text : text[this.lang()];
  }

  // "2023-09" -> "Sep 2023" / "set 2023"; null = in corso
  month(ym: string | null): string {
    if (!ym) return this.t({ en: 'Present', it: 'oggi' });
    const [y, m] = ym.split('-').map(Number);
    return new Intl.DateTimeFormat(this.lang(), { month: 'short', year: 'numeric' }).format(new Date(y, m - 1, 1));
  }
}
