import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { TodosService } from 'src/app/services/todos.service';
 
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
          map(todos => ({ type: '[Todo API] Add one success'})),
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

      
 
  constructor(
    private actions$: Actions,
    private todosService: TodosService
  ) {}
}