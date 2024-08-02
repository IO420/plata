import { Body, Controller, Delete, Logger, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { TypeService } from './type.service';
import { typeDto } from './dto/type.dto';

@Controller('type')
export class TypeController {
  constructor(private typeService: TypeService) {}

  @Post()
  register(@Body() data:typeDto) {
    Logger.debug(`register type`)
    this.typeService.register(data);
  }

  @Delete(':id_type')
  remove(@Param('id_type',ParseIntPipe) id_type:number){
    Logger.debug(`delete type`)
    this.typeService.remove(id_type);
  }
}
