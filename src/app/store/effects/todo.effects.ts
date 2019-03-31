import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { TodosService } from 'src/app/services/todos.service';
import { UpdateOne } from '../actions/todos.actions';
 
@Injectable()
export class TodosEffects {
 
  @Effect()
  chargerTodos$ = this.actions$
    .pipe(
      ofType('[Todo details page] Get All'),
      mergeMap(() => this.todosService.getTodos()
        .pipe(
          map(todos => ({ type: '[Todo API] Get All success', payload: todos })),
          catchError(() => EMPTY)))
    );
    
  @Effect()
  ajouterTodos$ = this.actions$
    .pipe(
      ofType('[Todo details page] Add one'),
      mergeMap((action: any) => this.todosService.addTodo(action.payload) 
        .pipe(
          map(() => ({ type: '[Todo API] Add one success'})),
          catchError(() => EMPTY)))
    );

  @Effect()
  ajouterTodosSuccess$ = this.actions$
    .pipe(
      ofType('[Todo API] Add one success'),
      mergeMap(() => this.todosService.getTodos()
        .pipe(
          map(todos => ({ type: '[Todo details page] Get All'})),
          catchError(() => EMPTY)))
    );

  @Effect()
  majTodos$ = this.actions$
    .pipe(
      ofType('[Todo details page] Update one'),
      mergeMap((action: UpdateOne) => this.todosService.updateTodo(action.payload)
        .pipe(
          map((todo) => ({ type: '[Todo API] Update one success'})),
          catchError(() => EMPTY)))
    );

  @Effect()
  majTodoSuccess$ = this.actions$
    .pipe(
      ofType('[Todo API] Update one success'),
      mergeMap(() => this.todosService.getTodos()
        .pipe(
          map(todos => ({ type: '[Todo details page] Get All'})),
          catchError(() => EMPTY)))
    );
      
 
  constructor(
    private actions$: Actions,
    private todosService: TodosService
  ) {}
}