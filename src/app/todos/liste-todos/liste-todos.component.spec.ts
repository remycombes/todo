import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTodosComponent } from './liste-todos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

describe('ListeTodosComponent', () => {
  let component: ListeTodosComponent;
  let fixture: ComponentFixture<ListeTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */
  
});
