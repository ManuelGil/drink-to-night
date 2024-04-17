import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { reservationsRoutes } from './reservations.routes';

@NgModule({
  imports: [RouterModule.forChild(reservationsRoutes)],
  exports: [RouterModule],
})
export class ReservationsRoutingModule {}
