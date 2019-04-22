import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { Component } from '@angular/core';

// Stub components pour composants nestés
@Component({selector: 'router-outlet', template: ''})
class RouterOutletStubComponent { }

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let composant: any; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, 
        RouterOutletStubComponent
      ],
      imports: [CoreModule]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);  
    composant = fixture.debugElement.componentInstance;
  });

  it('est créé', () => { 
    expect(composant).toBeTruthy();
  });

  it("a comme titre 'Liste des todos'", ()=>{
    expect(composant.titre).toEqual('Liste des todos');
  })

});
