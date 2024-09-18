import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ImagesService {
  async saveImage(fotografia: string, name: string): Promise<string> {
    if (!fotografia) {
      throw new BadRequestException('No image provided');
    }

    // Extraer la extensión de la imagen
    const matches = fotografia.match(/^data:image\/([a-zA-Z]+);base64,/);
    if (!matches) {
      throw new BadRequestException('Invalid image format');
    }
    const ext = matches[1];

    // Decodificar la cadena base64 y guardar la imagen
    const buffer = Buffer.from(fotografia.split(',')[1], 'base64');
    const imageName = `${name}.${ext}`;

    // Definir ruta del directorio y asegurar que exista
    const dirPath = path.join(process.cwd(), 'imagenes');
    const imagePath = path.join(dirPath, imageName);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // Guardar la imagen en el directorio 'imagenes'
    fs.writeFileSync(imagePath, buffer);

    return imageName;
  }

  async deleteImage(name: string): Promise<void> {
    Logger.debug('Deleting image');
    const imageDir = path.join(process.cwd(), 'imagenes');
    const imagePath = path.join(imageDir, name);

    const extensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'avif'];
    let fileFound = false;

    // Verificar y eliminar la imagen con una de las extensiones permitidas
    for (const ext of extensions) {
      const fullImagePath = `${imagePath}.${ext}`;
      if (fs.existsSync(fullImagePath)) {
        fs.unlinkSync(fullImagePath);
        fileFound = true;
        Logger.debug(`Deleted image: ${fullImagePath}`);
        break;
      }
    }

    if (!fileFound) {
      Logger.warn(`Image with name ${name} not found, continuing.`);
    }
  }

  async modify(fotografia: string, name: string): Promise<string> {
    if (!fotografia) {
      throw new BadRequestException('No image provided');
    }

    // Eliminar la imagen existente antes de guardar la nueva
    await this.deleteImage(name);

    // Extraer la extensión de la imagen
    const matches = fotografia.match(/^data:image\/([a-zA-Z]+);base64,/);
    if (!matches) {
      throw new BadRequestException('Invalid image format');
    }
    const ext = matches[1];

    // Decodificar la cadena base64 y guardar la imagen
    const buffer = Buffer.from(fotografia.split(',')[1], 'base64');
    const imageName = `${name}.${ext}`;

    // Definir ruta del directorio y asegurar que exista
    const dirPath = path.join(process.cwd(), 'imagenes');
    const imagePath = path.join(dirPath, imageName);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // Guardar la imagen en el directorio 'imagenes'
    fs.writeFileSync(imagePath, buffer);

    return imageName;
  }
}
