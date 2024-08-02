import { Body, Controller, Delete, Logger, Param, ParseIntPipe, Post } from '@nestjs/common';
import { KindService } from './kind.service';
import { KindDto } from './dto/kind.dto';

@Controller('kind')
export class KindController {
    constructor(
        private kinServices:KindService,
    ){}

    @Post()
    register(@Body() data:KindDto){
        Logger.debug('register kind')
        this.kinServices.register(data)
    }

    @Delete(':id_kind')
    remove(@Param('id_kind',ParseIntPipe) id_kind:number){
        this.kinServices.remove(id_kind)
    }
}
