import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map} from 'rxjs/operators';
import { Todo } from '../dto/todo.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private urlTodo: string = "api/todos"; 

  constructor(private http: HttpClient) { }

  public getTodos(): Observable<Todo[]>{    
    return this.http.get<Todo[]>(this.urlTodo); 
  }

  public addTodo(todo: Todo): Observable<Todo>{
    console.log(todo); 
    return this.http.post<Todo>(this.urlTodo, todo, httpOptions).pipe(
      catchError(this.handleError<Todo>('ajout Todo'))
    ); 
  }

  public updateTodo(todo: Todo): Observable<Todo>{
    return this.http.put<Todo>(this.urlTodo, todo, httpOptions).pipe(
      catchError(this.handleError<Todo>('ajout Todo'))
    ); 
  }

  public deleteTodo (todo: Todo | number): Observable<Todo> {
    const id = typeof todo === 'number' ? todo : todo.id;  
    return this.http.delete<Todo>(this.urlTodo, httpOptions).pipe(
      catchError(this.handleError<Todo>('Suppression todo', null))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
