import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  id: number = 1;
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get('http://localhost:3000/tasks');
  }

  PostTodo(todo: any) {

    console.log("Inside Post task creation")
    return this.http.post('http://localhost:3000/tasks/create', todo);
  }
  
  getTodoById(id: number) {
    return this.http.get(`http://localhost:3000/tasks/${id}`);
  }

  add(x:number, y:number): number {
    return x + y;
  }

}
