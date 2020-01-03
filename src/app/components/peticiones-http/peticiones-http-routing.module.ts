import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeticionesComponent } from './peticiones/peticiones.component';
import { GetListComponent } from './get-list/get-list.component';
import { HttpPostComponent } from './http-post/http-post.component';


const routes: Routes = [
  {path:'g', component: PeticionesComponent},
  {path:'gl', component: GetListComponent},
  {path:'p', component: HttpPostComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeticionesHttpRoutingModule { }
