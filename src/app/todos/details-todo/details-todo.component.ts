import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Todo } from 'src/app/dto/todo.model';
import { Store } from '@ngrx/store';
import { TodoState } from 'src/app/store/reducers/todos.reducers';
import * as selecteurs from 'src/app/store/selectors/todo.selector';
import { ActivatedRoute } from '@angular/router';

/*
  DETAILS DU TODO
  Affiche le todo sélectionné du state
*/

@Component({
  selector: 'app-details-todo',
  templateUrl: './details-todo.component.html',
  styleUrls: ['./details-todo.component.css']
})
export class DetailsTodoComponent implements OnInit {
  // PROPRIETES /////////////////////////////////////////////////////////////////////////////
  public todo$: Observable<Todo>;
  public souscriptionsParametresRoute: Subscription; 
  public idTodo: number; 

  // DEPENDANCES ////////////////////////////////////////////////////////////////////////////
  constructor(
    private store: Store<TodoState>, 
    private route: ActivatedRoute
  ) { }

  // LIFECYCLE //////////////////////////////////////////////////////////////////////////////
  ngOnInit() {
    this.todo$ = this.store.select(selecteurs.getTodoSelectionnee);    
    this.souscriptionsParametresRoute =  this.route.paramMap.subscribe(
      (param)=>{
        this.idTodo = +param.get("id"); 
        this.todo$ = this.store.select(selecteurs.getTodo, {id: ''+param.get("id")});}, 
      (error)=>{console.log(error)});
  }
  
  // METHODES ///////////////////////////////////////////////////////////////////////////////

}
