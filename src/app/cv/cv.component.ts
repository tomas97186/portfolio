import { Component, signal } from '@angular/core';
import { CERTS, CV_NOTE, EDUCATION, JOBS, LANGUAGES, PROFILE, SKILLS } from '../data/profile';
import { NgStyle } from '@angular/common';
import { LangSwitchComponent } from '../i18n/lang-switch.component';
import { MonthPipe, TPipe } from '../i18n/t.pipe';
import { UI } from '../i18n/ui';

// Dati che non devono finire sul sito pubblico (telefono, ecc.).
// Li inietta scripts/cv-pdf.mjs leggendo cv.private.json, che non è versionato.
interface PrivateInfo {
  phone?: string;
  website?: string;
}

@Component({
  selector: 'app-cv',
  standalone: true,
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
  imports: [NgStyle, LangSwitchComponent, TPipe, MonthPipe],
})
export class CvComponent {
  p = PROFILE;
  jobs = JOBS;
  skills = SKILLS;
  certs = CERTS;
  education = EDUCATION;
  languages = LANGUAGES;
  note = CV_NOTE;
  ui = UI;
  showNote = signal(true);

  priv: PrivateInfo = (window as any).__CV_PRIVATE__ ?? {};

  links = [
    // { label: 'linkedin', url: this.p.linkedin },
    { label: 'website', url: this.p.website },
    // { label: 'github', url: this.p.github },
    // { label: 'credly', url: this.p.credly },
  ].filter(l => !!l.url);

  // "https://www.github.com/foo/" -> "github.com/foo"
  short(url: string) {
    return url.replace(/^https?:\/\/(www\.|it\.)?/, '').replace(/\/$/, '');
  }

  print() {
    window.print();
  }
}
