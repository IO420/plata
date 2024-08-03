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
import { KindService } from './kind.service';
import { KindDto } from './dto/kind.dto';

@Controller('kind')
export class KindController {
  constructor(private kinServices: KindService) {}

  @Get()
  findAll() {
    Logger.debug('find all kind');
    return this.kinServices.findAll();
  }

  @Post()
  register(@Body() data: KindDto) {
    Logger.debug('register kind');
    return this.kinServices.register(data);
  }

  @Delete(':id_kind')
  remove(@Param('id_kind', ParseIntPipe) id_kind: number) {
    return this.kinServices.remove(id_kind);
  }

  @Put(':id_kind')
  modify(@Param('id_kind', ParseIntPipe) id_kind:number,@Body() data:KindDto){
    return this.kinServices.modify(id_kind,data)
  }
}
