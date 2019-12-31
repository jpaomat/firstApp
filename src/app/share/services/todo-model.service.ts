import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { ModelTodo } from 'src/app/share/interfaces/model-todo';
import { Observable } from 'rxjs';
import { TodoModel } from '../interfaces/todo-model';

@Injectable({
  providedIn: 'root'
})

export class TodoModelService {

  constructor(private db: AngularFirestore) { }

  private todoCollection='todos';

  getAll():Observable<firebase.firestore.QuerySnapshot>{
    return this.db.collection<ModelTodo>(this.todoCollection, ref=> ref.orderBy('lastModifiedDate', 'desc')).get();
  };
  saveAll(todo: ModelTodo):Promise<DocumentReference>{
    return this.db.collection(this.todoCollection).add(todo);
  };
  editAll(todo: TodoModel): Promise<void>{
    return this.db.collection(this.todoCollection).doc(todo.id).update(todo);
  }
  editAllPartial(id: string, obj: Object): Promise<void>{
    return this.db.collection(this.todoCollection).doc(id).update(obj);
  }
  deleteAll(idTodo: string): Promise<void>{
    return this.db.collection(this.todoCollection).doc(idTodo).delete();
  }
  
}
