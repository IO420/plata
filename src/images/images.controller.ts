import { Body, Controller, Logger, Post, Put } from '@nestjs/common';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {
    constructor(private readonly imagenService: ImagesService) {}

    @Post()
    async upload(@Body() body) {
      Logger.debug('upload image');
      const { fotografia, nombre } = body;
  
      const imageUrl = await this.imagenService.saveImage(fotografia, nombre);
  
      return { message: 'Image uploaded successfully', imageUrl };
    }
  
    @Put()
    async modify(@Body() body) {
      Logger.debug('modify image');
      const { fotografia, nombre } = body;
  
      const imageUrl = await this.imagenService.modify(fotografia, nombre);
  
      return { message: 'Image uploaded successfully', imageUrl };
    }
  
}
