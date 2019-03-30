import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/dto/todo.model';
import { Store } from '@ngrx/store';
import { TodoState } from 'src/app/store/reducers/todos.reducers';
import { AddOne, GetAll } from 'src/app/store/actions/todos.actions';

@Component({
  selector: 'app-ajouter-todo',
  templateUrl: './ajouter-todo.component.html',
  styleUrls: ['./ajouter-todo.component.css']
})
export class AjouterTodoComponent implements OnInit {
  // PROPRIETES /////////////////////////////////////////////////////////////////////////////
  public formulaireTodo: FormGroup = this.fb.group({
    titre: ['', Validators.required], 
    description: ['']
  });  

  // DEPENDANCES ////////////////////////////////////////////////////////////////////////////  
  constructor(
    private fb: FormBuilder, 
    private store: Store<TodoState>, 
    private service: TodosService
  ) { }

  // LIFECYCLE //////////////////////////////////////////////////////////////////////////////
  ngOnInit() {
    this.formulaireTodo.patchValue({  // initialisation des valeurs du formulaire (vides)
      titre: '', 
      description: ''
    });
  }

  // METHODES ///////////////////////////////////////////////////////////////////////////////
  // FORMULAIRE //////////////////////////////////////////////////////////////////////////////
  soumettreFormulaire(){    
    let todoAAjouter : Todo = {
      id: '7', 
      titre: this.formulaireTodo.get('titre').value, 
      description: this.formulaireTodo.get('description').value, 
      effectue: false
    }
    this.service.addTodo(todoAAjouter).subscribe(
      (data)=>{
        console.log(data); 
        this.store.dispatch(new GetAll());
      }, 
      (error)=>{console.log(error)}
    ); 
    /*
    this.store.dispatch(new AddOne(todoAAjouter)); 
    */

  }

}
