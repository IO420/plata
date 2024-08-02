import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { TypeService } from './type.service';
import { typeDto } from './dto/type.dto';

@Controller('type')
export class TypeController {
  constructor(private typeService: TypeService) {}

  @Get()
  findAll() {
    Logger.debug(`find all types`);
    return this.typeService.findAll();
  }

  @Post()
  register(@Body() data: typeDto) {
    Logger.debug(`register type`);
    return this.typeService.register(data);
  }

  @Delete(':id_type')
  remove(@Param('id_type', ParseIntPipe) id_type: number) {
    Logger.debug(`delete type`);
    return this.typeService.remove(id_type);
  }
}
