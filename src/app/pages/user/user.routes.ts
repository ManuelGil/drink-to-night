import { Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { ManagementComponent } from './components/management/management.component';
import { MyReservationComponent } from './components/my-reservation/my-reservation.component';

export const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'management',
        component: ManagementComponent,
      },
      {
        path: 'my-reservation',
        component: MyReservationComponent,
      },
      { path: '', redirectTo: 'management', pathMatch: 'full' },
      { path: '**', redirectTo: 'management', pathMatch: 'full' },
    ],
  },
];
