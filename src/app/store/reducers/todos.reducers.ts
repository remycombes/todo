import * as Action from '../actions/todos.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Todo } from '../../dto/todo.model';


// FONCTION DE TRI
function trierSelonEtatEtId(a: Todo, b: Todo): number {
    let etatA: string  = a.effectue ? '1' : '0'; 
    let etatB: string = b.effectue ? '1' : '0'; 
    return etatA.localeCompare(etatB) ; 

}
// ADAPTEUR DES TODOS
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
    // idTodoSelectionne: null, 
    todoSelectionne: null
});

// REDUCER
export function todoReducer(state: TodoState = initialState, action: Action.TodosActions): TodoState {
    switch (action.type) {
        // SELECTIONS
        case Action.TodoActionTypes.SELECT_ONE:
            return {...state,todoSelectionne: action.payload};
        case Action.TodoActionTypes.DESELECT_ONE:
            return {...state,todoSelectionne: null};

        // RECUPERATIONS
        case Action.TodoActionTypes.GET_ALL:
            return {...state, chargementListe: true};
        case Action.TodoActionTypes.GET_ALL_SUCCESS:
            return todoAdapter.addAll(action.payload, {...state, chargementListe: false});

        // MISES A JOUR
        case Action.TodoActionTypes.UPDATE_ONE: 
            return {...state, chargementListe: true};
            // return todoAdapter.updateOne({id: action.idTodo, changes: action.modifications}, state);
        case Action.TodoActionTypes.UPDATE_ONE_SUCCESS: 
            return {...state, chargementListe: true};
            // return todoAdapter.updateOne({id: action.idTodo, changes: action.modifications}, state);
            // return {...state,chargementUpdate: false};

        // AJOUT
        case Action.TodoActionTypes.ADD_ONE:
            return {...state,chargementUpdate: true};
        case Action.TodoActionTypes.ADD_ONE_SUCCESS:
            return {...state,chargementUpdate: false};

        // DEFAUT
        default:
            return state;
    }
}

// Récupération d'éléments du state
export const getTodoSelectionne = (state: TodoState = initialState) => {    
    return state.todoSelectionne;};

export const getChargementUpdate = (state: TodoState) => {    
    return state.chargementUpdate;};

export const getChargementListe = (state: TodoState) => {    
    return state.chargementListe;};

// Sélecteurs issus de l'adapteur
const {
    selectAll, 
    selectIds, 
    selectEntities
} = todoAdapter.getSelectors();

export const selectTodos = selectAll;
export const selectIdsTodos = selectIds;
export const selectEntitesTodos = selectEntities; 

