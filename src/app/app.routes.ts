import { Routes } from '@angular/router';

import { authGuard } from './pages/auth/guards/auth.guard';
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
  {
    path: 'user',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./pages/user/user.module').then(module => module.UserModule),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
];
