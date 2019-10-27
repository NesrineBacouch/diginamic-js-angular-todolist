import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
​
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
​
@NgModule({
  declarations: [
    AppComponent,
    TodoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }