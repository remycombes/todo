import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Todo } from 'src/app/dto/todo.model';
import * as actions from 'src/app/store/selectors/todo.selector';
import { GetAll, SelectOne, UpdateOne } from 'src/app/store/actions/todos.actions';
import { TodoState } from 'src/app/store/reducers/todos.reducers';
import { Router, ActivatedRoute } from '@angular/router';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-liste-todos',
  templateUrl: './liste-todos.component.html',
  styleUrls: ['./liste-todos.component.css']
})
export class ListeTodosComponent implements OnInit, OnDestroy {
  // PROPRIETES /////////////////////////////////////////////////////////////////////////////
  public todos$: Observable<Todo[]>;
  public chargement$:  Observable<boolean>; 
  public souscriptionChargement: Subscription;

  // DEPENDANCES  ///////////////////////////////////////////////////////////////////////////
  constructor(
    private store: Store<TodoState>, 
    private route: ActivatedRoute,
    private router: Router
    ) { }

  // LIFECYCLE  /////////////////////////////////////////////////////////////////////////////
  ngOnInit() {
    this.store.dispatch(new GetAll());
    this.todos$ = this.store.select(actions.getTodos);    
    this.chargement$ = this.store.select(actions.getChargementUpdate);
  }

  ngOnDestroy(){
    this.souscriptionChargement.unsubscribe();
  }

  // METHODES  //////////////////////////////////////////////////////////////////////////////

  // SELECTION TODO /////////////////////////////////////////////////////////////////////////
  public selectionnerTodo(idTodo: string){
    this.store.dispatch(new SelectOne(idTodo));
    this.router.navigate(['/todos', idTodo]);
  }  

  // COCHAGE TODO ///////////////////////////////////////////////////////////////////////////
  public clickCheckboxEffectue(todo: Todo, valeur: MatCheckboxChange){
    this.store.dispatch(new UpdateOne(todo.id, {effectue: valeur.checked}));
  }

  // NAVIGATION /////////////////////////////////////////////////////////////////////////////
  public clickBoutonAjout(){
    this.router.navigate(['ajout'], { relativeTo: this.route });
  }

}
