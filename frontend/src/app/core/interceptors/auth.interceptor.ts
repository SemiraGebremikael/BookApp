import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn =
(req, next) => {

  const token = localStorage.getItem('token');

  const isAuthRequest =
    req.url.includes('/auth/login') ||
    req.url.includes('/auth/register');

  if (token && !isAuthRequest) {

    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req);
};