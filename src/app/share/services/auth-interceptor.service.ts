import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {
  //ESTE SERVICIO SE TIENE QUE AGREGAR EN EL APP.MODULE (providers)
  intercep(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    console.log('http interceptor');
    req=req.clone({
      setHeaders:{'Authorization':'token http header'}//permite configurar la cabecera deseada
    });
    return next.handle(req);
  }
}
