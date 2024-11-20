import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent {
  todos: Todo[] = [
    {
      content: 'First todo',
      completed: false,
    },
    {
      content: 'Seccond todo',
      completed: true,
    },
  ];
}
