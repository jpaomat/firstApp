import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  baseURL= environment.apiURL+'posts/'
  constructor(private httpService: HttpClient) { }
  getUser(id:string):Observable<User>{
    const url=this.baseURL+id;//se pone la url completa
    return this.httpService.get<User>(url);//se hace la peticion
  }
  