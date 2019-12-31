import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  entryComponents:[FormComponent]
})
export class TodoListModule { }
