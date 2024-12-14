import { Body, Controller, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private appsService: TodoService) {}

  @Post('/create')
  createTodo(@Body() data: CreateTodoDto) {
    return this.appsService.createTodo(data);
  }
}
