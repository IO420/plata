import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import path from 'path';

@Injectable()
export class ImagesService {
    async saveImage(fotografia: string, name: string): Promise<string> {
        if (!fotografia) {
          throw new BadRequestException('No image provided');
        }
    
        // Extract the image extension
        const matches = fotografia.match(/^data:image\/([a-zA-Z]+);base64,/);
        if (!matches) {
          throw new BadRequestException('Invalid image format');
        }
        const ext = matches[1];
    
        // Decode base64 string and save the image
        const buffer = Buffer.from(fotografia.split(',')[1], 'base64');
        const imageName = `${name}.${ext}`;
    
        // Save image to the 'imagenes' directory in the root of the project
        const imagePath = path.join(process.cwd(), 'imagenes', imageName);
    
        // Ensure the directory exists
        const dirPath = path.join(process.cwd(), 'imagenes');
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath, { recursive: true });
        }
    
        fs.writeFileSync(imagePath, buffer);
    
        return imageName;
      }
    
      async deleteImage(name: string): Promise<void> {
        Logger.debug('delete image');
        const imageDir = path.join(process.cwd(), 'imagenes');
        const imagePath = path.join(imageDir, name);
      
        const extensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'avif'];
      
        let fileFound = false;
        for (const ext of extensions) {
          const fullImagePath = `${imagePath}.${ext}`;
          if (fs.existsSync(fullImagePath)) {
            fs.unlinkSync(fullImagePath);
            fileFound = true;
            break;
          }
        }
    
        if (!fileFound) {
          console.log('Image not found, but continuing to save the new image.');
        }
      }
    
      async modify(fotografia: string, name: string): Promise<string> {
        if (!fotografia) {
          throw new BadRequestException('No image provided');
        }
    
        await this.deleteImage(name);
    
        // Extract the image extension
        const matches = fotografia.match(/^data:image\/([a-zA-Z]+);base64,/);
        if (!matches) {
          throw new BadRequestException('Invalid image format');
        }
        const ext = matches[1];
    
        // Decode base64 string and save the image
        const buffer = Buffer.from(fotografia.split(',')[1], 'base64');
        const imageName = `${name}.${ext}`;
    
        // Save image to the 'imagenes' directory in the root of the project
        const imagePath = path.join(process.cwd(), 'imagenes', imageName);
    
        // Ensure the directory exists
        const dirPath = path.join(process.cwd(), 'imagenes');
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath, { recursive: true });
        }
    
        fs.writeFileSync(imagePath, buffer);
    
        return imageName;
      }
    
}
