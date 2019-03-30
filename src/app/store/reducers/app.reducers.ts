import { ActionReducerMap } from '@ngrx/store';
import * as todosReducer from './todos.reducers';

// State de notre feature
export interface ElementsState {
	todos: todosReducer.TodoState;
}

// Reducers pour notre state
export const appReducers: ActionReducerMap<ElementsState> = {
	todos: todosReducer.todoReducer
};