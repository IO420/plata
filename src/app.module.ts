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
import { StorageService } from './storage/storage.service';
import { StorageController } from './storage/storage.controller';
import { StorageModule } from './storage/storage.module';
import { KindModule } from './kind/kind.module';
import { KindProductService } from './kind-product/kind-product.service';
import { KindProductController } from './kind-product/kind-product.controller';
import { KindProductModule } from './kind-product/kind-product.module';
import { Type } from './type/entity/type.entity';
import { StorageDetails } from './storage-details/entity/storage-details.entity';
import { Kind } from './kind/entity/kind.entity';
import { KindProduct } from './kind-product/entity/kind-product.entity';
import { Storage } from './storage/entity/storage.entity';

@Module({
  imports: [
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
        Kind,
        KindProduct,
      ],
      synchronize: true,
    }),
    ProductModule,
    UserModule,
    TypeModule,
    StorageDetailsModule,
    StorageModule,
    KindModule,
    KindProductModule,
  ],
  controllers: [AppController, StorageController, KindProductController],
  providers: [AppService, StorageService, KindProductService],
})
export class AppModule {}
