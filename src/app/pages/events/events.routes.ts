import { Routes } from '@angular/router';

import { EventsComponent } from './events.component';

export const eventRoutes: Routes = [
  {
    path: '',
    component: EventsComponent,
  },
  { path: '**', redirectTo: '' },
];
