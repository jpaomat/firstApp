import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeticionesHttpRoutingModule } from './peticiones-http-routing.module';
import { PeticionesComponent } from './peticiones/peticiones.component';
import { GetListComponent } from './get-list/get-list.component';
import { HttpPostComponent } from './http-post/http-post.component'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PeticionesComponent, GetListComponent, HttpPostComponent],
  imports: [
    CommonModule,
    PeticionesHttpRoutingModule,
    FormsModule
  ]
})
export class PeticionesHttpModule { }
