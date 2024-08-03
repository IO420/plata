import { Body, Controller, Post } from '@nestjs/common';
import { KindProductDto } from './dto/kind-product.dto';
import { KindProductService } from './kind-product.service';

@Controller('kind-product')
export class KindProductController {
    constructor(private kindProductService:KindProductService){}

    @Post('register')
    async register(@Body() kindProductDto: KindProductDto) {
      return this.kindProductService.register(kindProductDto);
    }
}
