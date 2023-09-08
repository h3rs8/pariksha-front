import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';
import { AppInjector } from '../app.module';

export const adminGuard: CanActivateFn = (route, state) => {

  let login = AppInjector.get(LoginService);
  let router = AppInjector.get(Router);

  if(login.isLoggedIn() && login.getUserRole()=='ADMIN'){
    return  true;
  }
  
  router.navigate(['login']);
  return false;
};
