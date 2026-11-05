import { Module } from '@nestjs/common';
import { DealershipService } from './dealership.service.js';
import { DealershipController } from './dealership.controller.js';
import { Dealership } from './entities/dealership.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Dealership])],
  controllers: [DealershipController],
  providers: [DealershipService],
})
export class DealershipModule {}
