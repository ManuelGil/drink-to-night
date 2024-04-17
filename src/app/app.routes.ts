import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './pages/page-not-found';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(module => module.HomeModule),
  },
  {
    path: 'reservations',
    loadChildren: () =>
      import('./pages/reservations/reservations.module').then(
        module => module.ReservationsModule,
      ),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./pages/events/events.module').then(
        module => module.EventsModule,
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then(module => module.AboutModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then(module => module.AuthModule),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
];
