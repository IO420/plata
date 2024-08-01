import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  register(data) {
    this.userRepository.save(data);
    return { message: 'user register successfully' };
  }

  profile(id_user) {
    const user = this.userRepository.findOne({ where: { id_user } });

    if (!user) {
      throw new HttpException('User not fount', 404);
    }

    return user;
  }

  findAll() {
    const user = this.userRepository.find({
      order: {
        name: 'ASC',
      },
    });

    if (!user) {
      throw new HttpException('User not fount', 404);
    }

    return user;
  }

  async modify(id_user:number,data){
    const user = await this.userRepository.findOne({ where: { id_user } });

    if (!user) {
      throw new HttpException('User not fount', 404);
    }

    Object.assign(user, data);

    this.userRepository.save(user);

    return {message:'user modify successfully'}
  }

  async remove(id_user: number) {
    const user = await this.userRepository.find({ where: { id_user } });

    if (!user) {
      throw new HttpException('User not fount', 404);
    }

    this.userRepository.remove(user);
    return { message: 'user delete successfully' };
  }
}
