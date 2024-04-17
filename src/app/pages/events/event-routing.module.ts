import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { eventRoutes } from './events.routes';

@NgModule({
  imports: [RouterModule.forChild(eventRoutes)],
  exports: [RouterModule],
})
export class EventRoutingRoutingModule {}
