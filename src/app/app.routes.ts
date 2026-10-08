import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cv', loadComponent: () => import('./cv/cv.component').then(m => m.CvComponent) },
  { path: '**', redirectTo: '' },
];
