import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  register(@Body() data) {
    Logger.debug('register User');
    return this.userService.register(data);
  }

  @Get()
  findAll() {
    Logger.debug('find All Users');
    return this.userService.findAll();
  }

  @Get(':id_user')
  profile(@Param('id_user', ParseIntPipe) id_user: number) {
    Logger.debug(`profile User by ${id_user}`);
    return this.userService.profile(id_user);
  }

  @Put(':id_user')
  modify(@Param('id_user', ParseIntPipe) id_user: number,@Body() data) {
    Logger.debug('modify User');
    return this.userService.modify(id_user,data);
  }

  @Delete(':id_user')
  remove(@Param('id_user', ParseIntPipe) id_user: number) {
    Logger.debug('delete User');
    return this.userService.remove(id_user);
  }
}
