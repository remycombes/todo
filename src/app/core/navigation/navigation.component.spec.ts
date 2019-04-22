import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let fixture: ComponentFixture<NavigationComponent>;
  let composant: NavigationComponent;
  let debugElement : DebugElement; 
  let nativeElement : HTMLElement;
  let titreApplicationAttendu: string = "titre test";

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent ]
    }); 
    fixture = TestBed.createComponent(NavigationComponent);
    composant = fixture.componentInstance;
    debugElement = fixture.debugElement; 
    nativeElement = debugElement.nativeElement;  
  });

  it('est créé', () => {
    expect(composant).toBeTruthy();
  });

  it("affiche le titre de l'application (récupéré depuis l'input du composant)", ()=>{
    const spanTitre = nativeElement.querySelector('#titreApplication'); 
    composant.titreApplication = titreApplicationAttendu; 
    expect(spanTitre.textContent).not.toEqual(composant.titreApplication); 
    fixture.detectChanges();
    expect(spanTitre.textContent).toEqual(composant.titreApplication); 
  })
});
