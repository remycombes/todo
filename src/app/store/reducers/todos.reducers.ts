import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Todo } from '../../dto/todo.model';
import { TypesActionsTodos, TodosActions } from '../actions/todos.actions';

// FONCTION DE TRI
function trierSelonEtat(a: Todo, b: Todo): number {
    let etatA: string  = a.effectue ? '1' : '0'; 
    let etatB: string = b.effectue ? '1' : '0'; 
    return etatA.localeCompare(etatB) ; 
}
// ADAPTEUR DES TODOS
const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>({
    sortComparer: trierSelonEtat
});

// STATE
export interface TodoState extends EntityState<Todo> { 
    chargement: boolean; 
    todoSelectionne: Todo; 
}
const initialState: TodoState = todoAdapter.getInitialState({
    chargement: false, 
    todoSelectionne: null
});

// REDUCER
export function todoReducer(state: TodoState = initialState, action: TodosActions): TodoState {
    switch (action.type) {        
        case TypesActionsTodos.SELECT_ONE:              return {...state, todoSelectionne: action.todo};  
        case TypesActionsTodos.DESELECT_ONE:            return {...state, todoSelectionne: null};

        case TypesActionsTodos.GET_ALL:                 return {...state, chargement: true};
        case TypesActionsTodos.GET_ALL_SUCCESS:         return todoAdapter.addAll(action.todos, {...state, chargement: false});

        case TypesActionsTodos.UPDATE_ONE:              return {...state, chargement: true};
        case TypesActionsTodos.UPDATE_ONE_SUCCESS:      return todoAdapter.updateOne({id: action.id, changes: action.todo}, {...state, chargement: true});

        case TypesActionsTodos.ADD_ONE:                 return {...state, chargement: true};
        case TypesActionsTodos.ADD_ONE_SUCCESS:         return todoAdapter.addOne(action.todo, {...state, chargement: true});
        default:                                        return state;
    }
}

// Récupération d'éléments du state
export const getTodoSelectionne = (state: TodoState = initialState) => { return state.todoSelectionne;};
export const getChargement = (state: TodoState) => { return state.chargement;};

// Sélecteurs issus de l'adapteur
const {selectAll, selectIds, selectEntities} = todoAdapter.getSelectors();

export const selectTodos = selectAll;
export const selectIdsTodos = selectIds;
export const selectEntitesTodos = selectEntities; 

