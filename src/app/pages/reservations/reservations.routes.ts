import { Routes } from '@angular/router';
import { ReservationsComponent } from './reservations.component';

export const reservationsRoutes: Routes = [
  {
    path: '',
    component: ReservationsComponent,
  },
  { path: '**', redirectTo: '' },
];
