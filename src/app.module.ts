import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';
import { ProductModule } from './product/product.module';
import { Product } from './product/entity/product.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'plata',
      entities: [User, Product],
      synchronize: true,
    }),
    ProductModule,UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
