import { HttpException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Type } from './entity/type.entity';
import { Repository } from 'typeorm';
import { typeDto } from './dto/type.dto';

@Injectable()
export class TypeService {
  constructor(
    @InjectRepository(Type)
    private typeRepository: Repository<Type>,
  ) {}

  findAll() {
    return this.typeRepository.find({ order: { name: 'ASC' } });
  }

  register(data: typeDto) {
    this.typeRepository.save(this.typeRepository.create(data));

    return { message: 'type register' };
  }

  async remove(id_type: number) {
    const type = await this.typeRepository.findOne({ where: { id_type } });

    if (!type) {
      Logger.debug('type not fount');
      throw new HttpException('type not fount', 404);
    }

    this.typeRepository.remove(type);

    return { message: 'type delete' };
  }
}
