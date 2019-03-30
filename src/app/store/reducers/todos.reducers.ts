import * as Action from '../actions/todos.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Todo } from '../../dto/todo.model';


// ADAPTEUR


function trierSelonEtatEtId(a: Todo, b: Todo): number {
    let etatA: string  = a.effectue ? '1' : '0'; 
    let etatB: string = b.effectue ? '1' : '0'; 
    return etatA.localeCompare(etatB) || b.id.localeCompare(a.id); 

}
const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>({
    sortComparer: trierSelonEtatEtId
});

// STATE
export interface TodoState extends EntityState<Todo> { 
    chargementListe: boolean; 
    chargementUpdate: boolean; 
    idTodoSelectionne: string | null; 
}
const initialState: TodoState = todoAdapter.getInitialState({
    chargementListe: false, 
    chargementUpdate: false, 
    idTodoSelectionne: null
});

// REDUCER

export function todoReducer(state: TodoState = initialState, action: Action.TodosActions): TodoState {
    switch (action.type) {
        case Action.TodoActionTypes.ADD_ONE:
            return {...state,chargementUpdate: true};
        case Action.TodoActionTypes.ADD_ONE_SUCCESS:
            return {...state,chargementUpdate: false};
        case Action.TodoActionTypes.SELECT_ONE:
            return {...state,idTodoSelectionne: action.payload};
        case Action.TodoActionTypes.UPDATE_ONE: 
            return todoAdapter.updateOne({id: action.id,changes: action.changes,}, state);
        case Action.TodoActionTypes.GET_ALL:
            return state;
        case Action.TodoActionTypes.GET_ALL_SUCCESS:
            return todoAdapter.addAll(action.payload, state);
        default:
            return state;
    }
}

// SELECTEURS
export const getIdTodoSelectionne = (state: TodoState) => {    
    return state['todos']['idTodoSelectionne'];
};

export const getChargementUpdate = (state: TodoState) => {    
    return state.chargementUpdate;
};

const {
    selectAll, 
    selectIds, 
    selectEntities
} = todoAdapter.getSelectors();

export const selectTodos = selectAll;
export const selectIdsTodos = selectIds;
export const selectEntitesTodos = selectEntities; 

