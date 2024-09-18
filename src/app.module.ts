import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/entity/user.entity';
import { ProductModule } from './product/product.module';
import { Product } from './product/entity/product.entity';
import { TypeModule } from './type/type.module';
import { Type } from './type/entity/type.entity';
import { StorageModule } from './storage/storage.module';
import { Storage } from './storage/entity/storage.entity';
import { StorageDetailsModule } from './storage-details/storage-details.module';
import { StorageDetails } from './storage-details/entity/storage-details.entity';
import { KindModule } from './kind/kind.module';
import { Kind } from './kind/entity/kind.entity';
import { ImagesModule } from './images/images.module';
import { ImagesController } from './images/images.controller';
import { ImagesService } from './images/images.service';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
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
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'imagenes'),
      serveRoot: '/imagenes',
    }),
    ProductModule,
    UserModule,
    TypeModule,
    StorageDetailsModule,
    StorageModule,
    KindModule,
    ImagesModule,
  ],
  controllers: [AppController, ImagesController],
  providers: [AppService, ImagesService],
})
export class AppModule {}
