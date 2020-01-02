import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', loadChildren:'./components/todo-list/todo-list.module#TodoListModule'},
  {path:'', loadChildren:'./components/peticiones-http/peticiones-http.module#PeticionesHttpModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
