import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModelTodo } from 'src/app/share/interfaces/model-todo';
import { TodoModelService } from 'src/app/share/services/todo-model.service';
import { DocumentReference } from '@angular/fire/firestore';
import { TodoModel } from 'src/app/share/interfaces/todo-model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formComplete: FormGroup;
  createMode: boolean=true;
  todo: TodoModel;
  constructor(private formBuilder:FormBuilder,public activeModal: NgbActiveModal, private todoService: TodoModelService) { }

  ngOnInit() {
    this.formComplete=this.formBuilder.group({
      title:['',Validators.required],
      description:['',Validators.required],
      done:false
    })
    if(!this.createMode){
      this.loadAll(this.todo);
    }
  }
  loadAll(todo){
    this.formComplete.patchValue(todo);
  }
  saveAll(){
    //se valida la informacion del formulario
    if(this.formComplete.invalid){
      return;//si es invalida se detiene la ejecucion de la funcion
    }
    //si es valida se envia la informacion a firebase
    if(this.createMode){
      let todo:ModelTodo= this.formComplete.value;
      todo.lastModifiedDate= new Date;
      todo.createDate= new Date;
      this.todoService.saveAll(todo).then(Response =>this.saveAllData(Response,todo)).catch(err=> console.error(err));
    }else{
      let todo:TodoModel= this.formComplete.value;
      todo.id=this.todo.id;
      todo.lastModifiedDate= new Date;
      this.todoService.editAll(todo).then(()=>this.editAllData(todo)).catch(err=> console.error(err));
    }
  }
  saveAllData(Response: DocumentReference, todo: ModelTodo){
    this.activeModal.dismiss({todo: todo, id: Response.id, createMode: true});
  }
  editAllData(todo: TodoModel){
    this.activeModal.dismiss({todo: todo, id: todo.id, createMode: true});
  }

}
