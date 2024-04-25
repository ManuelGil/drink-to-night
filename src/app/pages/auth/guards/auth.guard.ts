import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthServiceService } from '../services/auth-service.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthServiceService);
  const router = inject(Router);

  const currentAuth = authService.getCurrentAuth();
  if (currentAuth) {
    return true;
  }

  // not logged in so redirect to login page with the return url
  router.navigate(['/auth/login']);
  return false;
};
