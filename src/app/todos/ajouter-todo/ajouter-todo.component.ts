import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { Todo } from 'src/app/dto/todo.model';
import { Store } from '@ngrx/store';
import { TodoState } from 'src/app/store/reducers/todos.reducers';
import { AddOne, GetAll } from 'src/app/store/actions/todos.actions';
import * as actions from 'src/app/store/selectors/todo.selector';

/*
  FORMULAIRE D'AJOUT D'UN TODO
  Utilisation d'un formulaire réactif comprenant 2 champs (titre et description)
  Souscription au state pour gérer la disponibilité du formulaire.
*/
@Component({
  selector: 'app-ajouter-todo',
  templateUrl: './ajouter-todo.component.html',
  styleUrls: ['./ajouter-todo.component.css']
})
export class AjouterTodoComponent implements OnInit, OnDestroy {
  // PROPRIETES /////////////////////////////////////////////////////////////////////////////
  public formulaireTodo: FormGroup = this.fb.group({    // Formulaire réactif
    titre: ['', Validators.required], 
    description: ['']
  });  
  public chargement$: Observable<boolean>;              // Enregistrement en cours
  public souscriptionChargement: Subscription;          // Utilisé pour modifier l'aspect du form

  // DEPENDANCES ////////////////////////////////////////////////////////////////////////////  
  constructor(
    private fb: FormBuilder, 
    private store: Store<TodoState>
  ) { }

  // LIFECYCLE //////////////////////////////////////////////////////////////////////////////
  ngOnInit() {
    this.resetFormulaire();
    this.chargement$ = this.store.select(actions.getChargementUpdate);
    
    this.souscriptionChargement = this.chargement$.subscribe(  // gestion des évènements liés au chargement
      (chargement)=>{
        if(!chargement) {                                      // Si fin de chargement, rendre le formulaire disponible
          this.formulaireTodo.enable(); 
          this.resetFormulaire();}
        else                                                   // Si chargement en cours, bloquer formulaire
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
    let todoAAjouter : Todo = {                               // Alimenter un todo avec les valeurs du formulaire
      id: null, 
      titre: this.formulaireTodo.get('titre').value, 
      description: this.formulaireTodo.get('description').value, 
      effectue: false
    }    
    this.store.dispatch(new AddOne(todoAAjouter));            // Dispatcher l'action d'ajout
  }

  resetFormulaire(){
    // Mise à jour du formulaire aux valeurs par défaut. 
    this.formulaireTodo.patchValue({  
      titre: '', 
      description: ''
    });
  }

}
