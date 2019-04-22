import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, mergeMap} from 'rxjs/operators';
import { Todo } from '../dto/todo.model';

const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  // PROPRIETES ///////////////////////////////////////////////////////////////////////////
  readonly urlTodo: string = "api/todos";   
  private idMax: number = 6 ; /*TODO : A SUPPRIMER SI SERVEUR NON MOCKE */

  // DEPENDANCES //////////////////////////////////////////////////////////////////////////
  constructor(private http: HttpClient) { }

  // METHODES /////////////////////////////////////////////////////////////////////////////
  public getTodos(): Observable<Todo[]>{    
    return this.http
      .get<Todo[]>(this.urlTodo)
      .pipe(catchError(this.gererErreur)); 
  }

  public getTodo(id: string): Observable<Todo>{
    return this.http.get<Todo>(this.urlTodo, {params: {'id': id}})
    .pipe(catchError(this.gererErreur));
  }


  public addTodo(todo: Todo): Observable<Todo>{
    this.idMax++; /*TODO : A SUPPRIMER SI SERVEUR NON MOCKE */
    todo.id = this.idMax; /*TODO : A SUPPRIMER SI SERVEUR NON MOCKE */
    return this.http
      .post<Todo>(this.urlTodo, todo, httpOptions)
      .pipe(catchError(this.gererErreur)); 
  }

  public updateTodo(todo: Partial<Todo>): Observable<Todo>{
    return this.http
      .put<Todo>(this.urlTodo + '/' + todo.id, todo, httpOptions)
      .pipe(catchError(this.gererErreur)); 
  }

  public deleteTodo (todo: Todo | number): Observable<Todo> {
    const id = typeof todo === 'number' ? todo : todo.id;  
    return this.http.delete<Todo>(this.urlTodo, httpOptions).pipe(
      catchError(this.gererErreur)
    );
  }

  private gererErreur(erreur: HttpErrorResponse){
    if(erreur.error instanceof ErrorEvent){
      console.error('Une erreur est survenue: ', erreur.error.message);
    } else {
      console.error('Le serveur retourne le code ' + erreur.status + ' - ' + erreur.statusText);
    }
    return throwError('Une erreur est survenue, veuillez reessayer plus tard');
  }
}
