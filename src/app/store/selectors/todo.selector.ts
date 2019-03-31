import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodos from 'src/app/store/reducers/todos.reducers';
import { Todo } from 'src/app/dto/todo.model';

const selectTodosState = createFeatureSelector<fromTodos.TodoState>('todos');

// SELECTEURS ////////////////////////////////////////////////////////////////////////////////////////////////////
// TODOS
export const getTodos = createSelector(selectTodosState, fromTodos.selectTodos);
export const getTodo = createSelector(getTodos,(todos, propriete) => {    
    let todoARetourner: Todo = null; 
    for(let todo of todos){if(todo.id == propriete["id"]){todoARetourner = todo;}}
    return todoARetourner; });  

// CHARGEMENTS
export const getChargementUpdate = createSelector(selectTodosState, fromTodos.getChargementUpdate);
export const getChargementListe = createSelector(selectTodosState, fromTodos.getChargementListe);

// TODO SELECTIONNEE
export const getTodoSelectionnee = createSelector(selectTodosState, fromTodos.getTodoSelectionne);

