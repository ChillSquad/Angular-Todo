import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent {
  todos: Todo[] = [];

  inputTodo: string = '';

  toggleDone(id: number): void {
    this.todos.forEach((value, index) => {
      if (index === id) {
        value.completed = !value.completed;
      }
    });
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((value, index) => index !== id);
  }

  addTodo(): void {
    if (this.inputTodo !== '') {
      this.todos.push({
        content: this.inputTodo,
        completed: false,
      });
    } else {
      alert('Введите задачу');
    }

    this.inputTodo = '';
  }
}
