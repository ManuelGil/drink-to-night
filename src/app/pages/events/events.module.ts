import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EventRoutingRoutingModule } from './event-routing.module';
import { EventsComponent } from './events.component';

@NgModule({
  declarations: [EventsComponent],
  imports: [CommonModule, EventRoutingRoutingModule],
})
export class EventsModule {}
