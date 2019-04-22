import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { AjouterTodoComponent } from './ajouter-todo.component';
import { of } from 'rxjs';

class StoreMock {
  select = jasmine.createSpy().and.returnValue(of(true)); 
  dispatch = jasmine.createSpy();
}

describe('AjouterTodoComponent', () => {
  // DONNEES DE TEST //////////////////////////////////////////////////////////
  let fixture: ComponentFixture<AjouterTodoComponent>;
  let composant: AjouterTodoComponent;
  let store: Store<boolean>; 
  

  // CONFIGURATION ////////////////////////////////////////////////////////////
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule, 
        SharedModule
      ], 
      declarations: [ AjouterTodoComponent ], 
      providers: [{provide: Store, useClass: StoreMock}, ]
    });
    fixture = TestBed.createComponent(AjouterTodoComponent);
    composant = fixture.componentInstance;
    store = TestBed.get(Store); 
  });

  // TESTS ////////////////////////////////////////////////////////////////////
  it("est créé", ()=>{
    expect(composant).toBeTruthy();
  }); 
  
});
