import { Component, Injectable } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { Title } from '@angular/platform-browser';
import { TodoEntity } from './ToDOEntity';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

@Injectable()
export class TodoComponent  {
 todoService: TodoServiceService;

  constructor(todoService: TodoServiceService) {
    this.todoService = todoService
   
  }

  Post() {
    // This method will be used to post data to the server
    // You can implement the logic to send data to your backend here
   const todoEntity = new TodoEntity("5","Appointment", "Appointmemnt", "Pending");

    console.log("Post method called");
    this.todoService.PostTodo(todoEntity).subscribe(
      response => {console.log("Post successful",response)})
  }

  GetAll() {
    // This method will be used to get all data from the server
    // You can implement the logic to retrieve data from your backend here
    console.log("GetAll method called");
    this.todoService.getTodos().subscribe(
      response => {console.log("GetAll successful", response)}
    );
  }

  GetById() {
    // This method will be used to get a specific item by ID from the server
    // You can implement the logic to retrieve a specific item from your backend here
    console.log("GetById method called");
    this.todoService.getTodoById(1).subscribe(
      response => {console.log("GetById successful", response)}
    );
  }

}
