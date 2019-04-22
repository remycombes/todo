import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosRoutingModule } from './todos-routing.module';
import { AjouterTodoComponent } from './ajouter-todo/ajouter-todo.component';
import { ListeTodosComponent } from './liste-todos/liste-todos.component';
import { DetailsTodoComponent } from './details-todo/details-todo.component';
import { TodosComponent } from './todos.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { InMemoryTodosService } from '../services/in-memory-todos.service';
import { TodosService } from '../services/todos.service';
import { SharedModule } from '../shared/shared.module';
import { todoReducer } from '../store/reducers/todos.reducers';


@NgModule({
  imports: [
    CommonModule, 
    SharedModule, 
    TodosRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature('todos', todoReducer), 
    HttpClientInMemoryWebApiModule.forFeature(InMemoryTodosService),
  ],
  declarations: [
    TodosComponent,
    AjouterTodoComponent, 
    ListeTodosComponent, 
    DetailsTodoComponent
  ], 
  providers:[
    TodosService, 
    InMemoryTodosService
  ]
})
export class TodosModule { }
