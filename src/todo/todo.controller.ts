import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
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

  @Get('/')
  getTodo() {
    return this.appsService.getTodos();
  }

  @Get('/queries')
  getTodoByQuery(@Query('searchFilter') searchFilter: string) {
    return searchFilter;
  }
  @Put('/:id')
  updateTodo(@Param('id') id: number, @Body() data) {
    return this.appsService.updateTodo(data, id);
  }

  @Delete('/:id')
  delTodo(@Param('id') id: number) {
    return this.appsService.delTodoById(id);
  }
}
