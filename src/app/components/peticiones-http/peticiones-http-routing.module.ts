import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeticionesComponent } from './peticiones/peticiones.component';
import { GetListComponent } from './get-list/get-list.component';


const routes: Routes = [
  {path:'p', component: PeticionesComponent},
  {path:'l', component: GetListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeticionesHttpRoutingModule { }
