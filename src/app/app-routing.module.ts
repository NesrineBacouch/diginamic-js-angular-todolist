import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoListComponentComponent } from './todo-list/todo-list.component';
​
​
const routes: Routes = [
  { path: 'add', component: TodoEditComponent },
  { path: '"edit/:id', component: TodoEditComponent },
  { path: 'list', component: TodoListComponentComponent },
  { path: '', pathMatch: 'full', redirectTo: 'list' }
];
​
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

