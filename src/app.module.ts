import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';
import { ProductModule } from './product/product.module';
import { Product } from './product/entity/product.entity';
import { UserModule } from './user/user.module';
import { TypeModule } from './type/type.module';
import { StorageDetailsModule } from './storage-details/storage-details.module';
import { StorageModule } from './storage/storage.module';
import { KindModule } from './kind/kind.module';
import { Type } from './type/entity/type.entity';
import { StorageDetails } from './storage-details/entity/storage-details.entity';
import { Kind } from './kind/entity/kind.entity';
import { Storage } from './storage/entity/storage.entity';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'plata',
      entities: [
        User,
        Type,
        Product,
        Storage,
        StorageDetails,
        Kind
      ],
      synchronize: true,
    }),
    ProductModule,
    UserModule,
    TypeModule,
    StorageDetailsModule,
    StorageModule,
    KindModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
