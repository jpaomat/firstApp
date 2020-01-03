import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/share/services/peticiones.service';
import { compare } from 'fast-json-patch'; //esta funcion permite generar el arreglo de operaciones a partir de las ediciones hechas sobre un modelo
import { User } from 'src/app/share/interfaces/user';

@Component({
  selector: 'app-http-patch',
  templateUrl: './http-patch.component.html',
  styleUrls: ['./http-patch.component.scss']
})
export class HttpPatchComponent implements OnInit {
  users: User[];//listado de usuarios
  model: User;//modelo editado
  originalUser: User;//modelo originl
  constructor(private peticionService: PeticionesService) { }

  ngOnInit() {
    this.patchUser();
  };
  patchUser(){//se cargan los usuarios del api
    this.peticionService.getUserList().subscribe((usersFromApi: User[])=>{
      this.users=usersFromApi;
      this.model=Object.assign({}, this.users[0])//cargar primer usuario (con Object.assign se clona el objecto)
      this.originalUser=this.users[0]; //el original es e primer usuario
    })
  };
  selectUser(user: User){
    this.model=Object.assign({}, user); //clona el priumer usuario
    this.originalUser=user;
  };
  onSubmit(){
    const patch= compare(this.originalUser, this.model);//la funcion compare sirve para generar la lista de operaciones (se le pasa usuario original y uruario editado)
    console.log(patch);
    this.peticionService.patchUser(this.model.id, patch).subscribe((Response)=>{
      console.log(Response);
    })

  }
}
