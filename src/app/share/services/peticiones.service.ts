import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { Operation } from 'fast-json-patch'

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  baseURL= environment.apiURL+'posts/'
  constructor(private httpService: HttpClient) { }
  getUser(id:string):Observable<User>{ //<Users> es el tipo de retorno del observable
    const url=this.baseURL+id;//se pone la url completa
    return this.httpService.get<User>(url);//se hace la peticion
  }
  getUserList():Observable<User[]>{
    //pimer forma de manejar cabeceras
    /*let headers= new HttpHeaders({
      'Authorization':'bearer token',
      'X-Pagination': '23'
    });*/
    //segunda forma: se pueden manejar con condiciones
    /*let headers= new HttpHeaders();
      if (1==1) {
        headers= headers.append('Authorization','bearer token');
      }
      headers= headers.append('X-Pagination','2');
      */
     //tercera forma: query strings
     let params= new HttpParams();
     params= params.append('Authorization','bearer token')
    return this.httpService.get<User[]>(this.baseURL,{params});
  };
  getUserWithHeaders():Observable<any>{
    return this.httpService.get(this.baseURL,{observe: 'response'})
  };
  postUser(user: User):Observable<User>{
    return this.httpService.post<User>(this.baseURL,user);
  };
  putUser(user: User):Observable<User>{
    const url=this.baseURL+user.id;
    return this.httpService.put<User>(url, user);
  };
  deleteUser(id: string):Observable<any>{
    const url=this.baseURL+id;
    return this.httpService.delete<any>(url);
  };
  patchUser(id:string, operations: Operation[]){
    const url=this.baseURL+id;
    return this.httpService.patch(url, operations);
  }
}
