import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/share/services/peticiones.service';
import { User } from 'src/app/share/interfaces/user';

@Component({
  selector: 'app-get-list',
  templateUrl: './get-list.component.html',
  styleUrls: ['./get-list.component.scss']
})
export class GetListComponent implements OnInit {
  users:User[];
  constructor(private peticionService: PeticionesService) { }

  ngOnInit() {
    this.peticionService.getUserList().subscribe((userList:User[])=>{
      this.users=userList;
    },(err:any)=>{
      console.error(err);
    })
  };
  getUserList(){
    
  }

}
