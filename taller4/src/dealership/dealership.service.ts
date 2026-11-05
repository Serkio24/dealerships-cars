import { ConflictException, Injectable } from '@nestjs/common';
import { CreateDealershipDto } from './dto/create-dealership.dto.js';
import { UpdateDealershipDto } from './dto/update-dealership.dto.js';
import { Dealership } from './entities/dealership.entity.js';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DealershipService {
  constructor(
    @InjectRepository(Dealership)
    private readonly dealershipRepository: Repository<  Dealership>,
  ) {}
  
  async create(createDealershipDto: CreateDealershipDto): Promise<Dealership> {
    const taken = await this.dealershipRepository.findOneBy({
      name: createDealershipDto.name,
    });

    if (taken) {
      throw new ConflictException(
        `Ya existe una concesionaria con nombre ${createDealershipDto.name}`,
      );
    }

    const dealership = this.dealershipRepository.create(createDealershipDto);
    return this.dealershipRepository.save(dealership);
  }

  findAll() {
    return `This action returns all dealership`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dealership`;
  }

  update(id: number, updateDealershipDto: UpdateDealershipDto) {
    return `This action updates a #${id} dealership`;
  }

  remove(id: number) {
    return `This action removes a #${id} dealership`;
  }
}
