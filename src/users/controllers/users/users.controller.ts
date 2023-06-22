import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  HttpCode,
  Query,
  UsePipes,
  Param,
  ParseFloatPipe,
  ParseBoolPipe,
  ParseIntPipe,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response, query } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/users.service';
import { ValidatePipeNumber } from 'src/users/validate/validate.pipe';

@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  // @Get('/hola') // decorator
  // getUser(@Query() query: { name: string; query: string }) {
  //   console.log(query);
  //   return {
  //     name: 'Mod8124',
  //     user: 'mod812',
  //   };
  // }

  @Get()
  getAllUsers() {
    return this.userService.fetchUsers();
  }

  @Get('/:id')
  getSingleUser(@Param('id', ValidatePipeNumber) id: number) {
    return this.userService.fetchUser(id);
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  // if i use the decorator nest let me control about the controller
  postUser(@Body() body: CreateUserDto) {
    // if body: {} represent what we got
    return this.userService.postUser(body);
  }
}
