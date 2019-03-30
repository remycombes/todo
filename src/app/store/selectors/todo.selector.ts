import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodos from 'src/app/store/reducers/todos.reducers';

const selectTodosState = createFeatureSelector<fromTodos.TodoState>('todos');

// SELECTEURS ////////////////////////////////////////////////////////////////////////////////////////////////////
// TODOS
export const getTodos = createSelector(selectTodosState, fromTodos.selectTodos);
export const getTodo = createSelector(getTodos,(todo, propriete) => todo[propriete.id]);  
export const getTodosByID = createSelector(getTodos,(todo, propriete) => propriete.ids.map(id => todo[id]));

// CHARGEMENTS
export const getChargementUpdate = createSelector(selectTodosState, fromTodos.getChargementUpdate);
export const getChargementListe = createSelector(selectTodosState, fromTodos.getChargementListe);

// TODO SELECTIONNEE
export const getTodoSelectionnee = createSelector(selectTodosState, fromTodos.getTodoSelectionne);

