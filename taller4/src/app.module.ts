import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsModule } from './cars/cars.module.js';
import { DealershipModule } from './dealership/dealership.module.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'DB_HOST',
      port: 5434,
      username: 'DB_USER',
      password: 'DB_PASSWORD',
      database: 'DB_NAME',
      autoLoadEntities: true,
      synchronize: false,
    }),
    CarsModule,
    DealershipModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
