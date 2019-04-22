import { Action } from '@ngrx/store';
import { Todo } from '../../dto/todo.model';

export enum TypesActionsTodos{
  SELECT_ONE = '[Todo details page] Select one', 
  DESELECT_ONE = '[Todo details page] Deselect one',

  GET_ALL = '[Todo details page] Get All', 
  GET_ALL_SUCCESS = '[Todo API] Get All success', 

  UPDATE_ONE = '[Todo details page] Update one', 
  UPDATE_ONE_SUCCESS = '[Todo API] Update one success', 

  ADD_ONE = '[Todo details page] Add one', 
  ADD_ONE_SUCCESS = '[Todo API] Add one success', 

  // TODO : A AJOUTER
  // UPDATE_ONE_FAILURE = '[Todo API] Update one failure', 
  // GET_ALL_FAILURE = '[Todo API] Get All failure',
  // ADD_ONE_FAILURE = '[Todo API] Add one failure',
} 

// SELECTIONS //////////////////////////////////////////////////////////////////////
export class SelectOne implements Action {
  readonly type = TypesActionsTodos.SELECT_ONE;
  constructor(public todo: Todo) {} }

export class DeselectOne implements Action {
  readonly type = TypesActionsTodos.DESELECT_ONE; }

// RECUPERATION //////////////////////////////////////////////////////////////////////
export class GetAll implements Action {
  readonly type = TypesActionsTodos.GET_ALL; }

export class GetAllSuccess implements Action {
  readonly type = TypesActionsTodos.GET_ALL_SUCCESS;
  constructor(public todos: Todo[]) {} }

// MISE A JOUR //////////////////////////////////////////////////////////////////////
export class UpdateOne implements Action {
  readonly type = TypesActionsTodos.UPDATE_ONE;
  constructor( public id: string, public todo: Partial<Todo>) {}}

export class UpdateOneSuccess implements Action {
  readonly type = TypesActionsTodos.UPDATE_ONE_SUCCESS;
  constructor( public id: string, public todo: Todo) {}}
  

// AJOUT //////////////////////////////////////////////////////////////////////
export class AddOne implements Action {
  readonly type = TypesActionsTodos.ADD_ONE;
  constructor(public todo: Todo ) {} }

export class AddOneSuccess implements Action {
  readonly type = TypesActionsTodos.ADD_ONE_SUCCESS;
  constructor(public todo: Todo) {} }

// UNION DES TYPES //////////////////////////////////////////////////////////////////////
export type TodosActions = 
  SelectOne | DeselectOne |
  GetAll | GetAllSuccess | 
  UpdateOne | UpdateOneSuccess | 
  AddOne | AddOneSuccess  ;