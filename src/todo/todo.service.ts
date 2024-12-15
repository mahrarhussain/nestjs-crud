import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  private todos = [];
  createTodo(data): object {
    const item = {
      id: new Date().getTime(),
      ...data,
      createdAt: new Date().toISOString(),
      isCompleted: false,
    };

    this.todos.push(item);
    return {
      msg: 'success',
    };
  }

  getTodos() {
    return this.todos;
  }

  updateTodo(data, id) {
    const newTodo = this.todos.map((item, i) => {
      if (item.id === Number(id)) {
        return {
          ...item,
          ['title']: data.title,
          isCompleted: true,
        };
      }
      return item;
    });

    this.todos = newTodo;

    return {
      msg: 'todo updated',
    };
  }

  delTodoById(id) {
    const filteredTodos = this.todos.filter((t) => t.id !== Number(id));

    this.todos = filteredTodos;

    return {
      msg: 'todo is deleted',
    };
  }
}
