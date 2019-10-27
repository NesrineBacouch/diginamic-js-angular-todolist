import { Injectable } from '@angular/core';
import {Todos} from './todo.model';
import {Todo} from './todo.model';
import { element } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todolist= Todos  ;
  constructor() { }

  getAll(){
    return this.todolist;
  }
  get(id : number) {
    let todo: Todo;
    this.todolist.forEach(element => {
      if(element.id===id)
      todo= element;
    });
    return todo;
  }
  getNewId(){
    let max=0;
    for(var i=0;i<this.todolist.length;i++){
      if(this.todolist[i].id>this.todolist[i+1].id){
      max=this.todolist[i].id;
      
  }
 
};
  return max+1;
  }

  add(todo : Todo) {
this.todolist.push(todo);
  }

  edit(todo : Todo) {
    this.todolist.forEach(element => {
     if(todo.id===element.id)
     element.label=todo.label;
    });
  }
delete(id : number){
for(var i=0;i<this.todolist.length;i++){
  if(this.todolist[i].id===id)
this.todolist.splice(i,1);

}
}
}
