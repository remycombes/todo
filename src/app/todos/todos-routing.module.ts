import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos.component';
import { DetailsTodoComponent } from './details-todo/details-todo.component';
import { AjouterTodoComponent } from './ajouter-todo/ajouter-todo.component';
import { ListeTodosComponent } from './liste-todos/liste-todos.component';

const routes: Routes = [
  {
    path: 'todos',
    component: TodosComponent, 
    children: [
      {
        path: '', 
        component: ListeTodosComponent, 
        children: [
          {
            path: 'ajout',
            component: AjouterTodoComponent
          },
          {
            path: ':id',
            component: DetailsTodoComponent
          }
        ]
      }, 
    ]
  }, 
  {
    path : '**', 
    redirectTo: 'todos'

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }