import { Component } from '@angular/core';
import { PROFILE } from '../data/profile';
import { TPipe } from '../i18n/t.pipe';
import { UI } from '../i18n/ui';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TPipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  p = PROFILE;
  ui = UI;
  years = new Date().getFullYear() - 2021;
}
