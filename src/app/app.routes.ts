import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    // path: '',
    // loadComponent: () =>
    //   import('./pages/home/home.module').then(module => module.HomeModule),
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: 'error' },
];
