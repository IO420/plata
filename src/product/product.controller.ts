import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';
import { filter } from 'rxjs';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  findAll() {
    Logger.debug('find all products');
    return this.productService.findAll();
  }

  @Get('filter')
  findFilter(@Query() filters:any) {
    Logger.debug('find filter products');
    return this.productService.findFilter(filters);
  }

  @Get(':id_product')
  find(@Param('id_product',ParseIntPipe) id_product:number) {
    Logger.debug(`find one product ${id_product}`);
    return this.productService.find(id_product);
  }

  @Post()
  register(@Body() data:ProductDto){
    Logger.debug(`product register:${data.name}`);
    return this.productService.register(data);
  }

  @Put(':id_product')
  modify(@Param('id_product',ParseIntPipe) id_product:number,@Body() data:ProductDto){
    Logger.debug(`product modify:${id_product}`);
    return this.productService.modify(id_product,data);
  }

  @Delete(':id_product')
  remove(@Param('id_product',ParseIntPipe) id_product:number){
    Logger.debug(`product delete: ${id_product}`);
    return this.productService.remove(id_product);
  }

}
