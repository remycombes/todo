import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/dto/todo.model';
import { Store } from '@ngrx/store';
import { TodoState } from 'src/app/store/reducers/todos.reducers';
import * as actions from 'src/app/store/selectors/todo.selector';
import { ActivatedRoute } from '@angular/router';
import { SelectOne } from 'src/app/store/actions/todos.actions';

@Component({
  selector: 'app-details-todo',
  templateUrl: './details-todo.component.html',
  styleUrls: ['./details-todo.component.css']
})
export class DetailsTodoComponent implements OnInit {
  // PROPRIETES /////////////////////////////////////////////////////////////////////////////
  public todo: Todo; 

  // DEPENDANCES ////////////////////////////////////////////////////////////////////////////

  constructor(
    private store: Store<TodoState>, 
    private route: ActivatedRoute
  ) { }

  // LIFECYCLE //////////////////////////////////////////////////////////////////////////////
  ngOnInit() {
    let idUrl = this.route.snapshot.paramMap.get("id"); // Récupérer l'id de l'url
    if (idUrl) this.store.dispatch(new SelectOne(idUrl)); // dispatcher la selection du todo
    this.store.select(actions.getTodoSelectionne).subscribe(
      (todo)=>{this.todo = todo; }, 
      (error)=>{console.log(error);}
    );
    
  }
  

  // METHODES ///////////////////////////////////////////////////////////////////////////////

}
