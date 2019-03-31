import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from '../dto/todo.model';


@Injectable({
  providedIn: 'root'
})
export class InMemoryTodosService implements InMemoryDbService {
  createDb() {
    let todos: Todo[] = [
      {id: 1, titre: 'Faire les courses', description:'description des courses', effectue: false}, 
      {id: 2, titre: 'Aller courrir', description:'description du parcours', effectue: false}, 
      {id: 3, titre: 'Laver le linge', description:'description du linge à laver', effectue: true}, 
      {id: 4, titre: 'Laver la voiture', description:'description pour la voiture', effectue: false}, 
    ];
    return {todos};
  }  
  constructor() { }
  
}
