import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from '../form/form.component';
import { TodoModelService } from 'src/app/share/services/todo-model.service';
import { TodoModel } from 'src/app/share/interfaces/todo-model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private modalService: NgbModal, private todoService: TodoModelService) { }

  ngOnInit() {
    this.loadData();
  };
  todos: TodoModel[]=[];
  loadData(){
    this.todoService.getAll().subscribe(response => { //suscribe hace la peticion al servidor de firebase
      this.todos = [];
      response.docs.forEach(value => {
        const data = value.data();
        const id = value.id;
        const todo:TodoModel = {
          id: id,
          title: data.title,
          description: data.description,
          done: data.done,
          lastModifiedDate: data.lastModifiedDate.toDate()
        };
        this.todos.push(todo);
      });
    });
  }
  addHomework(){
    const modal=this.modalService.open(FormComponent);
    modal.result.then(
      this.formClose.bind(this),
      this.formClose.bind(this)
    )
  }
  formClose(Response){
    if (Response === Object(Response)) {
      if (Response.createMode) {
        Response.todo.id = Response.id;
        this.todos.unshift(Response.todo);
      } else {
        let index = this.todos.findIndex(value => value.id == Response.id);
        this.todos[index] = Response.todo;
      }
    }
  }
  checkedDone(index: number) {
    const newDoneValue = !this.todos[index].done
    this.todos[index].done = newDoneValue;
    const obj = { done: newDoneValue };
    const id = this.todos[index].id
    this.todoService.editAllPartial(id, obj);
  }
  handleEditClick(todo: TodoModel) {
    const modal = this.modalService.open(FormComponent);
    modal.result.then(
      this.formClose.bind(this),
      this.formClose.bind(this)
    )
    modal.componentInstance.createMode = false;
    modal.componentInstance.todo = todo;
  }

  handleDeleteClick(todoId: string, index: number) {
    this.todoService.deleteAll(todoId)
      .then(() => {
        this.todos.splice(index, 1);
      })
      .catch(err => console.error(err));
  }
}
