import { HttpErrorResponse } from '@angular/common/http';

import { TodosService } from './todos.service';
import { Todo } from '../dto/todo.model';
import { donneeAsynchrone, erreurAsynchrone} from 'src/utilitaires-tests';

describe('TodosService', () => {
  // DONNEES DE TEST //////////////////////////////////////////////////////////
  let serviceTodos: TodosService; 
  let httpClientSpy: any; 
  let urlTodoAttendue: string = "api/todos";

  // CONFIGURATION ////////////////////////////////////////////////////////////
  beforeEach(() =>{
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']); 
    serviceTodos = new TodosService(<any>httpClientSpy);
  });

  // TESTS ////////////////////////////////////////////////////////////////////
  it("possède la bonne url pour l'appel des webservices", ()=>{
    expect(serviceTodos.urlTodo).toEqual(urlTodoAttendue); 
  });

  it('#getTodos retourne des todos', ()=>{
    const todosAttendus : Todo[] = [
      {id: 1, titre: 'todo test 1', description : 'description test 1', effectue: true}, 
      {id: 2, titre: 'todo test 2', description : 'description test 2', effectue: true}
    ]; 
    httpClientSpy.get.and.returnValue(donneeAsynchrone(todosAttendus));
    serviceTodos.getTodos().subscribe(
      todos => expect(todos).toEqual(todosAttendus), 
      fail
    );
  })

  it('#getTodos retourne une erreur quand le serveur retourne 404', ()=>{
    const reponseErreur = new HttpErrorResponse({
      error: 'test erreur 404', 
      status: 404, 
      statusText: 'Not found'
    });
    httpClientSpy.get.and.returnValue(erreurAsynchrone(reponseErreur));

    serviceTodos.getTodos().subscribe(
      () =>{ fail('erreur attendue, données reçues à la place')}, 
      error =>{ expect(error).toBeDefined}
    );
  })
});
