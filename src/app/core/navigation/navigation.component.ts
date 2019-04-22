import { Component, OnInit, Input } from '@angular/core';

/*
  Composant de navigation. Vide pour le moment. 
 */
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent{
  @Input() titreApplication: string;
  constructor() { }
}
