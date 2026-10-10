import { Component, signal } from '@angular/core';
import { JOBS } from '../data/profile';
import { RevealDirective } from '../shared/reveal.directive';
import { MonthPipe, TPipe } from '../i18n/t.pipe';
import { UI } from '../i18n/ui';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealDirective, TPipe, MonthPipe],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  jobs = JOBS;
  ui = UI;
  // l'ultima esperienza aperta di default
  opened = signal(0);

  toggle(i: number) {
    this.opened.set(this.opened() === i ? -1 : i);
  }
}
