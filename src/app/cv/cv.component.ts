import { Component } from '@angular/core';
import { CERTS, CV_NOTE, EDUCATION, JOBS, LANGUAGES, PROFILE, SKILLS } from '../data/profile';

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
})
export class CvComponent {
  p = PROFILE;
  jobs = JOBS;
  skills = SKILLS;
  certs = CERTS;
  education = EDUCATION;
  languages = LANGUAGES;
  note = CV_NOTE;

  priv: PrivateInfo = (window as any).__CV_PRIVATE__ ?? {};

  links = [
    { label: 'linkedin', url: this.p.linkedin },
    { label: 'github', url: this.p.github },
  ].filter(l => !!l.url);

  // "https://www.github.com/foo/" -> "github.com/foo"
  short(url: string) {
    return url.replace(/^https?:\/\/(www\.|it\.)?/, '').replace(/\/$/, '');
  }

  print() {
    window.print();
  }
}
