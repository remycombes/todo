import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/dto/todo.model';
import { Store } from '@ngrx/store';
import { TodoState } from 'src/app/store/reducers/todos.reducers';
import { AddOne, GetAll } from 'src/app/store/actions/todos.actions';
import * as actions from 'src/app/store/selectors/todo.selector';

@Component({
  selector: 'app-ajouter-todo',
  templateUrl: './ajouter-todo.component.html',
  styleUrls: ['./ajouter-todo.component.css']
})
export class AjouterTodoComponent implements OnInit, OnDestroy {
  // PROPRIETES /////////////////////////////////////////////////////////////////////////////
  public formulaireTodo: FormGroup = this.fb.group({
    titre: ['', Validators.required], 
    description: ['']
  });  
  public chargement$: Observable<boolean>; 
  public souscriptionChargement: Subscription; 

  // DEPENDANCES ////////////////////////////////////////////////////////////////////////////  
  constructor(
    private fb: FormBuilder, 
    private store: Store<TodoState>, 
    private service: TodosService, 
    private router: Router
  ) { }

  // LIFECYCLE //////////////////////////////////////////////////////////////////////////////
  ngOnInit() {
    this.resetFormulaire();
    this.chargement$ = this.store.select(actions.getChargementUpdate);
    
    this.souscriptionChargement = this.chargement$.subscribe(  // gestion des évènements liés au chargement
      (chargement)=>{
        if(!chargement) {
          this.formulaireTodo.enable(); 
          this.resetFormulaire();}
        else 
          this.formulaireTodo.disable(); 
      }, 
      (error)=>{console.log(error)}
    ); 
  }

  ngOnDestroy(){
    this.souscriptionChargement.unsubscribe();
  }

  // METHODES ///////////////////////////////////////////////////////////////////////////////
  // FORMULAIRE //////////////////////////////////////////////////////////////////////////////
  soumettreFormulaire(){    
    let todoAAjouter : Todo = {
      id: null, 
      titre: this.formulaireTodo.get('titre').value, 
      description: this.formulaireTodo.get('description').value, 
      effectue: false
    }    
    this.store.dispatch(new AddOne(todoAAjouter));
  }

  resetFormulaire(){
    this.formulaireTodo.patchValue({  
      titre: '', 
      description: ''
    });
  }

}
