import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './pages/page-not-found';

export const routes: Routes = [
  {
    path: 'index',
    loadChildren: () =>
      import('./pages/home/home.module').then(module => module.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then(module => module.AuthModule),
  },
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
];
