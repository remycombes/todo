import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodos from 'src/app/store/reducers/todos.reducers';

const selectTodosState = createFeatureSelector<fromTodos.TodoState>('todos');

export const getTodos = createSelector(selectTodosState, fromTodos.selectTodos);

export const getTodoSelectionne = createSelector(
    selectTodosState,
    fromTodos.getIdTodoSelectionne,
    (todosDictionary, id) => {
        return todosDictionary.entities[id];
    }
);
