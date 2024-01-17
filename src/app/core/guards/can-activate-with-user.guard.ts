import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {CookieService} from "ngx-cookie-service";

export const canActivateWithUserGuard: CanActivateFn = async (route, state) => {
  const token: string = inject(CookieService).get('token')
  const router: Router = inject(Router);
  if (token)
    return true
  await router.navigateByUrl('auth/login');
  return false;
};
