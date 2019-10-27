import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoListService } from '../todo-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'td-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
todo: Todo;
  constructor(private todoService:TodoListService, private router: Router , private route: ActivatedRoute) { }

  ngOnInit() {
    let id=this.route.snapshot.paramMap.get('id');
    if(id==null){
    this.todo.id=0;
    this.todo.label="";
    }
    this.todo= this.todoService.get(parseInt(id));
  }
addTodo(){

if(this.todo.id===0){
  this.todo.id= this.todoService.getNewId();
  this.todoService.add(this.todo);
}
else{
  this.todoService.edit(this.todo);
}
this.router.navigate(['/']);
}
}
