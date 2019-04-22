import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { TodosService } from 'src/app/services/todos.service';
import { UpdateOne } from '../actions/todos.actions';
 
@Injectable()
export class TodosEffects {  

  @Effect() chargerTodos$ = this.actions$.pipe( 
    ofType('[Todo details page] Get All', '[Todo API] Add one success', '[Todo API] Update one success'),
    mergeMap(() => this.todosService.getTodos()), 
    map(todos => ({ type: '[Todo API] Get All success', todos: todos })));

  @Effect() ajouterTodo$ = this.actions$.pipe( 
    ofType('[Todo details page] Add one'),
    mergeMap((action: any) => this.todosService.addTodo(action.todo)), 
    map(todo => ({ type: '[Todo API] Add one success', todo: todo })));

  @Effect() majTodo$ = this.actions$.pipe( 
    ofType('[Todo details page] Update one'),
    mergeMap((action: any) => this.todosService.updateTodo(action.todo)), 
    map(todo => ({ type: '[Todo API] Update one success'})));
 
  constructor(
    private actions$: Actions,
    private todosService: TodosService
  ) {}
}