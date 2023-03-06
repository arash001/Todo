import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../Services/todo.service';
import { map, Observable } from 'rxjs';
import { Todo } from '../../Models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  dataSource: Todo[] = [];
  displayedColumns:string[]=[];
  http$ = new Observable<Todo[]>;
  doneTasks$ = new Observable<Todo[]>;
  undoneTasks$ = new Observable<Todo[]>;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {

    // fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    // .then((response) => response.json())
    // .then((json) => console.log(json));
    // this.http$ = this.http$.pipe(
    //   shareReplay()
    // );

    // this.doneTasks$ = this.http$.pipe(
    //   map((todo) => todo.filter((todo) => todo.completed === true))
    // );

    // this.undoneTasks$ = this.http$.pipe(
    //   map((todo) => todo.filter((todo) => todo.completed === false))
    // );


    this.http$ = this.todoService.getTodo()
    this.todoService.getTodo().subscribe((data) => {
      this.dataSource = data;
      this.displayedColumns= Object.keys(this.dataSource[0])
    });

    // this.doneTasks$ = this.http$.pipe(
    //   map((todo) => todo.filter((todo) => todo.completed === true))
    // );

    // this.undoneTasks$ = this.http$.pipe(
    //   map((todo) => todo.filter((todo) => todo.completed === false))
    // );

  }

}
