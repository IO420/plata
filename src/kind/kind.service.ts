import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Kind } from './entity/kind.entity';
import { Repository } from 'typeorm';
import { KindDto } from './dto/kind.dto';

@Injectable()
export class KindService {
  constructor(
    @InjectRepository(Kind)
    private kindRepository: Repository<Kind>,
  ) {}

  register(data:KindDto){
    this.kindRepository.save(this.kindRepository.create(data))
    return {message:'kind register'}
  }

  async remove(id_kind:number){
    const kind = await this.kindRepository.findOne({where:{id_kind}})

    if(!kind){
        throw new HttpException('kind not fount',404)
    }
    this.kindRepository.remove(kind)
  }
}
