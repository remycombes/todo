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
  DESELECT_ONE = '[Todo details page] Deselect one',
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
  constructor(public payload: Todo ) {}
}

export class DeselectOne implements Action {
  readonly type = TodoActionTypes.DESELECT_ONE;
}

export class AddOne implements Action {
  readonly type = TodoActionTypes.ADD_ONE;
  constructor(public payload: Todo ) {console.log(payload);}
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
  constructor(public payload: Todo[]) {}
}
export type TodosActions = UpdateOne | GetAll | GetAllSuccess | SelectOne | AddOne | AddOneSuccess | DeselectOne;