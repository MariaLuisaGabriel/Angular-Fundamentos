import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);//não há como pôr construtor aqui, então se usa inject()

  return auth.isAuth();//true: permite pagina a ser acessada; false: bloqueia acesso da página.
};
