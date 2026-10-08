import { Component, signal } from '@angular/core';
import { JOBS } from '../data/profile';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  jobs = JOBS;
  // l'ultima esperienza aperta di default
  opened = signal(0);

  toggle(i: number) {
    this.opened.set(this.opened() === i ? -1 : i);
  }
}
