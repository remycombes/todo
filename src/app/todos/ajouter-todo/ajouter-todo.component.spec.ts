import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTodoComponent } from './ajouter-todo.component';

describe('AjouterTodoComponent', () => {
  let component: AjouterTodoComponent;
  let fixture: ComponentFixture<AjouterTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
