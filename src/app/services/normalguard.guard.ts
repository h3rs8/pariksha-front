import { CanActivateFn, Router } from '@angular/router';
import { AppInjector } from '../app.module';
import { LoginService } from './login.service';

export const normalguardGuard: CanActivateFn = (route, state) => {
  let login = AppInjector.get(LoginService);
  let router = AppInjector.get(Router);

  if (login.isLoggedIn() && login.getUserRole() == 'NORMAL') {
    return true;
  }

  router.navigate(['login']);
  return false;

};
