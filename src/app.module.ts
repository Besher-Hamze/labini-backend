import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './modules/category/category.module';
import { CollectionModule } from './modules/collection/collection.module';
import { ProductModule } from './modules/product/product.module';
import { StoreModule } from './modules/store/store.module';
import { SubCategoryModule } from './modules/sub-category/sub-category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env', 
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST, 
      port: parseInt(process.env.DB_PORT, 10), 
      username: process.env.DB_USERNAME, 
      password: process.env.DB_PASSWORD, 
      database: process.env.DB_NAME,
      ssl: {
        rejectUnauthorized: true,
        ca: process.env.DB_SSL_CA, // SSL certificate for secure connections
      },
      autoLoadEntities: true, // Automatically load entities
      synchronize: process.env.NODE_ENV !== 'production', // Disable in production
    }),
    CategoryModule,
    ProductModule,
    SubCategoryModule,
    CollectionModule,
    StoreModule,
  ],
})
export class AppModule {}
