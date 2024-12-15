import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private appsService: TodoService) {}

  @Post('/create')
  createTodo(@Body() data: CreateTodoDto) {
    return this.appsService.createTodo(data);
  }

  @Get('/todo')
  getTodo() {
    return this.appsService.getTodos();
  }

  @Put('/todo/:id')
  updateTodo(@Param('id') id: number, @Body() data) {
    return this.appsService.updateTodo(data, id);
  }

  @Delete('/todo/:id')
  delTodo(@Param('id') id: number) {
    return this.appsService.delTodoById(id);
  }
}
