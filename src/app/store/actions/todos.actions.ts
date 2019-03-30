import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Todo } from '../../dto/todo.model';

export enum TodoActionTypes{
  UPDATE_ONE = '[Todo details page] Update one', 
  UPDATE_ONE_SUCCESS = '[Todo API] Update one success', 
  UPDATE_ONE_FAILURE = '[Todo API] Update one failure', 

  GET_ALL = '[Todo details page] Get All', 
  GET_ALL_SUCCESS = '[Todo API] Get All success', 
  GET_ALL_FAILURE = '[Todo API] Get All failure',

  ADD_ONE = '[Todo details page] Add one', 
  ADD_ONE_SUCCESS = '[Todo API] Add one success', 
  ADD_ONE_FAILURE = '[Todo API] Add one failure',

  SELECT_ONE = '[Todo details page] Select one', 
  SELECT_ONE_SUCCESS = '[Todo API] Select one success', 
  SELECT_ONE_FAILURE = '[Todo API] Select one failure'
} 

export class UpdateOne implements Action {
  readonly type = TodoActionTypes.UPDATE_ONE;
  constructor(
    public id: string,
    public changes: Partial<Todo>,
  ) { }
}

export class SelectOne implements Action {
  readonly type = TodoActionTypes.SELECT_ONE;
  constructor(public payload: string ) {}
}

export class AddOne implements Action {
  readonly type = TodoActionTypes.ADD_ONE;
  constructor(public payload: Todo ) {}
}

export class AddOneSuccess implements Action {
  readonly type = TodoActionTypes.ADD_ONE_SUCCESS;
  constructor(public payload: Todo[] ) {}
}

export class GetAll implements Action {
  readonly type = TodoActionTypes.GET_ALL;
  // constructor(public payload: Todo[] ) { }
}
export class GetAllSuccess implements Action {
  readonly type = TodoActionTypes.GET_ALL_SUCCESS;
  constructor(public payload: Todo[]) { }
}
export type TodosActions = UpdateOne | GetAll | GetAllSuccess | SelectOne | AddOne | AddOneSuccess;



/*
// Actions relatives à la récupération de la liste des todos
export class GetTodosAction implements Action {
  readonly type = TodoActionTypes.GET_TODO;
  constructor(){}
} 
export class GetTodosSuccessAction implements Action {
  readonly type = TodoActionTypes.GET_TODO_SUCCESS;
  constructor(public payload: Todo[]){}
}
export class GetTodosFailedAction implements Action {
  readonly type = TodoActionTypes.GET_TODO_FAILURE;
  constructor(public payload: string){}
}

// Actions relatives à la mise à jour d'un todo
export class UpdateTodoAction implements Action {
  readonly type = TodoActionTypes.UPDATE_TODO;
  constructor(public payload: Todo){}
} 
export class UpdateTodoSuccessAction implements Action {
  readonly type = TodoActionTypes.UPDATE_TODO_SUCCESS;
  constructor(public payload: Todo[]){}
}
export class UpdateTodoFailureAction implements Action {
  readonly type = TodoActionTypes.UPDATE_TODO_FAILURE;
  constructor(public payload: string){}
}

export type ActionsUnion = 
  GetTodosAction | GetTodosSuccessAction | GetTodosFailedAction | 
  UpdateTodoAction | UpdateTodoSuccessAction | UpdateTodoFailureAction; 
*/