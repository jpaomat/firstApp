import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/share/interfaces/user';
import { PeticionesService } from 'src/app/share/services/peticiones.service';


@Component({
  selector: 'app-http-post',
  templateUrl: './http-post.component.html',
  styleUrls: ['./http-post.component.scss']
})
export class HttpPostComponent implements OnInit {
  model:User={id:'',title:''};
  constructor(private peticionService: PeticionesService) { }

  ngOnInit() {
  };
  onSubmit(){
    console.log(this.model);
    this.peticionService.postUser(this.model).subscribe((Response: User)=>{
      console.log(Response)
    })
  }

}
