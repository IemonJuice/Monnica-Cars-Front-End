import { HttpInterceptorFn } from '@angular/common/http';
import {CookieService} from "ngx-cookie-service";
import {inject} from "@angular/core";

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const token:string = inject(CookieService).get('token');
  if(token){
    req = req.clone(
      {
        setHeaders: {Authorization: `Bearer ${token}`}
      }
    )
  }

  return next(req);
};
