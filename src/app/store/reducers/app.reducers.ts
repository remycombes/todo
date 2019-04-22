import { ActionReducerMap } from '@ngrx/store';
import { TodoState, todoReducer } from './todos.reducers';

// State global
export interface ElementsState {
	todos: TodoState;
}

// Reducers pour notre state
export const appReducers: ActionReducerMap<ElementsState> = {
	todos: todoReducer
};