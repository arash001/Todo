import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../Models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url = "https://jsonplaceholder.typicode.com/todos"
  constructor(private http: HttpClient) { }

  getTodo() {
    // return fetch(this.url).then((response) =>
    //   response.json()
    // ).catch((err) => console.log(err)
    // );
     return this.http.get<Todo[]>(this.url);
  }

}
