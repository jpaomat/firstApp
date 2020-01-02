import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/share/services/peticiones.service';
import { User } from 'src/app/share/interfaces/user';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  styleUrls: ['./peticiones.component.scss']
})
export class PeticionesComponent implements OnInit {
  notFound:boolean=false;
  user:User;
  constructor(private peticionService: PeticionesService) { }

  ngOnInit() {
  }
  getUser(id:string){
    this.notFound=false;
    this.user=null;
    this.peticionService.getUser(id).subscribe((userAPI:User)=>{
      this.user=userAPI;
    },(err:any)=>{
      console.error(err);
      this.notFound=true;
    })
  }

}
