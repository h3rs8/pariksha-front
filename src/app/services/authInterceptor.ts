import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoginService } from "./login.service";

const TOKEN_HEADER = 'Authorization';


    // add the jwt token from localstorage to the request

@Injectable()
export class authInterceptor implements HttpInterceptor {

    constructor(private login:LoginService){}
    intercept(req:HttpRequest<any>,
            next:HttpHandler
            ): Observable<HttpEvent<any>>{
                let authReq = req;
                const token = this.login.getToken();
                if(token != null ){
                    authReq = authReq.clone({
                        setHeaders:{Authorization:`Bearer ${token}`},
                    });

                }
                return next.handle(authReq);
    }


}

export const authInterceptorProviders=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:authInterceptor,
        multi:true,
    },
];
