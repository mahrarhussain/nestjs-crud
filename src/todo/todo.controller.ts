import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private appsService: TodoService) {}

  @Post('/create')
  createTodo(@Body() data) {
    return this.appsService.createTodo(data);
  }
}
