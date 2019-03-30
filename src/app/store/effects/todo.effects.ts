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
      switchMap(
        (action: any) => this.todosService.addTodo(action.payload) 
        .pipe(
          map(todo => ({ type: '[Todo API] Add one success', payload: todo })),
          catchError(() => EMPTY)))
    );

      
 
  constructor(
    private actions$: Actions,
    private todosService: TodosService
  ) {}
}