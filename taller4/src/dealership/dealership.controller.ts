import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DealershipService } from './dealership.service.js';
import { CreateDealershipDto } from './dto/create-dealership.dto.js';
import { UpdateDealershipDto } from './dto/update-dealership.dto.js';

@Controller('dealership')
export class DealershipController {
  constructor(private readonly dealershipService: DealershipService) {}

  @Post()
  create(@Body() createDealershipDto: CreateDealershipDto) {
    return this.dealershipService.create(createDealershipDto);
  }

  @Get()
  findAll() {
    return this.dealershipService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dealershipService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDealershipDto: UpdateDealershipDto) {
    return this.dealershipService.update(+id, updateDealershipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dealershipService.remove(+id);
  }
}
