import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  name: string;
  
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
