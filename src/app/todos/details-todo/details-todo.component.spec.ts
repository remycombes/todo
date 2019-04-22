import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsTodoComponent } from './details-todo.component';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/dto/todo.model';

class StoreMock {
  select = jasmine.createSpy().and.returnValue(of([
    {id: 1, titre: 'todo test 1', description: 'description test 1', effectue: false} 
  ])); 
  dispatch = jasmine.createSpy();
}

describe('DetailsTodoComponent', () => {
  let fixture: ComponentFixture<DetailsTodoComponent>;
  let composant: DetailsTodoComponent;
  let idTodoParametre: number = 555; 
  const todoAttendu: Todo = {id: 1, titre: 'todo test', description: 'description todo test', effectue: false}; 
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DetailsTodoComponent 
      ],
      providers: [
        {provide: Store, useClass: StoreMock}, 
        {provide: ActivatedRoute, useValue: {
          paramMap: of({ get: ()=>{return idTodoParametre;} }) } 
        }
      ]
    });
  });

  beforeEach(() => {    
    fixture = TestBed.createComponent(DetailsTodoComponent);
    composant = fixture.componentInstance;
  });
  
  it('est créé', () => {
    expect(composant).toBeTruthy();
  }); 

  it("récupère l'id en paramètre de la route", ()=>{
    expect(composant.idTodo).not.toEqual(idTodoParametre);
    composant.ngOnInit();
    expect(composant.idTodo).toEqual(idTodoParametre);
  }); 

});