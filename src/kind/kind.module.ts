import { Module } from '@nestjs/common';
import { KindController } from './kind.controller';
import { KindService } from './kind.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kind } from './entity/kind.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Kind])],
  controllers: [KindController],
  providers: [KindService]
})
export class KindModule {}
