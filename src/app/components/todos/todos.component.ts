import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos', //name of our compoenent selector
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  //declare and initialize variables
  title:string = "todos list starts here";
  todos:Todo[]; //todos is an array of Todo(s)

  inputTodo:string = ""; 

  constructor() { }

  ngOnInit(){ 
    this.todos = [// data
      {
        content: "First todo",
        completed: false  
      }, {
        content: "Second todo ",
        completed: false
      }
    ] 
  }

  //method
  toggleDone (id:number) {
    this.todos.map((item:Todo, i:number)=> {
      if (i === id) item.completed = !item.completed;
      return item;
    })
  }

  //method
  deleteTodo(id:number) {
    this.todos = this.todos.filter((item:Todo , i:number) => i !== id); //return everything not equal to id 
  }
  
  //method
  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    })

    this.inputTodo = "";
  }
}
