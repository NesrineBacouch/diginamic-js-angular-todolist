import { Component, OnInit } from '@angular/core';
import { Todos } from '../todo.model';
import { TodoListService } from '../todo-list.service';
import { Router } from '@angular/router';
@Component({
  selector: 'td-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponentComponent implements OnInit {
  todolist= Todos ;
  constructor(private todoService:TodoListService, private router: Router) { }

  ngOnInit() {
    this.todolist=this.todoService.getAll();
  }
  editTodo(id){
    this.router.navigate(['edit/:'+id]);
  }
  deleteTodo(id){
    this.todoService.delete(id);
  }
}
