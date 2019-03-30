import * as Action from '../actions/todos.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Todo } from '../../dto/todo.model';


// FONCTION DE TRI
function trierSelonEtatEtId(a: Todo, b: Todo): number {
    let etatA: string  = a.effectue ? '1' : '0'; 
    let etatB: string = b.effectue ? '1' : '0'; 
    return etatA.localeCompare(etatB) || b.id.localeCompare(a.id); 

}
// ADAPTEUR
const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>({
    sortComparer: trierSelonEtatEtId
});

// STATE
export interface TodoState extends EntityState<Todo> { 
    chargementListe: boolean; 
    chargementUpdate: boolean; 
    // idTodoSelectionne: string; 
    todoSelectionne: Todo; 
}
const initialState: TodoState = todoAdapter.getInitialState({
    chargementListe: false, 
    chargementUpdate: false, 
    // idTodoSelectionne: "0", 
    todoSelectionne: null
});

// REDUCER
export function todoReducer(state: TodoState = initialState, action: Action.TodosActions): TodoState {
    switch (action.type) {
        case Action.TodoActionTypes.ADD_ONE:
            return {...state,chargementUpdate: true};
        case Action.TodoActionTypes.ADD_ONE_SUCCESS:
            return {...state,chargementUpdate: false};
        case Action.TodoActionTypes.SELECT_ONE:
            return {...state,todoSelectionne: action.payload};
        case Action.TodoActionTypes.DESELECT_ONE:
            return {...state,todoSelectionne: null};
        case Action.TodoActionTypes.UPDATE_ONE: 
            return todoAdapter.updateOne({id: action.id,changes: action.changes}, state);
        case Action.TodoActionTypes.GET_ALL:
            return {...state, chargementListe: true};
        case Action.TodoActionTypes.GET_ALL_SUCCESS:
            return todoAdapter.addAll(action.payload, {...state, chargementListe: false});
        default:
            return state;
    }
}

// SELECTEURS
export const getIdTodoSelectionne = (state: TodoState = initialState) => {    
    return state['todos']['idTodoSelectionne'];
};

export const getTodoSelectionne = (state: TodoState = initialState) => {    
    return state.todoSelectionne;
};

export const getChargementUpdate = (state: TodoState) => {    
    return state.chargementUpdate;
};

export const getChargementListe = (state: TodoState) => {    
    return state.chargementListe;
};

const {
    selectAll, 
    selectIds, 
    selectEntities
} = todoAdapter.getSelectors();

export const selectTodos = selectAll;
export const selectIdsTodos = selectIds;
export const selectEntitesTodos = selectEntities; 

