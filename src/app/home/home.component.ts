import { Component } from '@angular/core';
import { NavComponent } from '../sections/nav.component';
import { HeroComponent } from '../sections/hero.component';
import { AboutComponent } from '../sections/about.component';
import { ExperienceComponent } from '../sections/experience.component';
import { SkillsComponent } from '../sections/skills.component';
import { EducationComponent } from '../sections/education.component';
import { ContactComponent } from '../sections/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    ContactComponent,
  ],
  template: `
    <app-nav />
    <main>
      <app-hero />
      <app-about />
      <app-experience />
      <app-skills />
      <app-education />
      <app-contact />
    </main>
  `,
})
export class HomeComponent {}
