import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ManagementComponent } from './components/management/management.component';
import { MyReservationComponent } from './components/my-reservation/my-reservation.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [UserComponent, ManagementComponent, MyReservationComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
