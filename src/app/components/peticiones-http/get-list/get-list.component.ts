import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/share/services/peticiones.service';
import { User } from 'src/app/share/interfaces/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-list',
  templateUrl: './get-list.component.html',
  styleUrls: ['./get-list.component.scss']
})
export class GetListComponent implements OnInit {
  users:User[];
  constructor(private peticionService: PeticionesService) { }

  ngOnInit() {
    this.getUserList();//se obtiene el json normal con http get
    //this.getUserListwithHeaders();//se obtiene el json leyendo la cabecera y codigo de estatus de la rta
  };
  getUserList(){
     this.peticionService.getUserList().subscribe((userList:User[])=>{
      this.users=userList;
    },(err:any)=>{
      console.error(err);
    })
  };
  getUserListwithHeaders(){
    this.peticionService.getUserWithHeaders().subscribe((Response: any)=>{
      console.log(Response);
      this.users=Response.body;
    },(err: any)=>{
      console.error(err);
      
    })
  };
  

}
