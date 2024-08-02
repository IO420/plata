import { HttpException, Injectable, Logger } from '@nestjs/common';
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
    this.userRepository.save(this.userRepository.create(data));
    return { message: 'user register successfully' };
  }

  profile(id_user) {
    const user = this.userRepository.findOne({ where: { id_user } });

    if (!user) {
      Logger.debug("User not fount")
      throw new HttpException('User not fount', 404);
    }

    Logger.debug("find user successfully")
    return user;
  }

  findAll() {
    const user = this.userRepository.find({
      order: {
        name: 'ASC',
      },
    });

    if (!user) {
      Logger.debug("User not fount")
      throw new HttpException('User not fount', 404);
    }

    Logger.debug("find all users successfully")
    return user;
  }

  async modify(id_user:number,data){
    const user = await this.userRepository.findOne({ where: { id_user } });

    if (!user) {
      Logger.debug("User not fount")
      throw new HttpException('User not fount', 404);
    }

    Object.assign(user, data);

    this.userRepository.save(user);
    Logger.debug("user modify successfully")
    return {message:'user modify successfully'}
  }

  async remove(id_user: number) {
    const user = await this.userRepository.find({ where: { id_user } });

    if (!user) {
      Logger.debug("User not fount")
      throw new HttpException('User not fount', 404);
    }

    this.userRepository.remove(user);
    Logger.debug("user delete successfully")
    return { message: 'user delete successfully' };
  }
}
