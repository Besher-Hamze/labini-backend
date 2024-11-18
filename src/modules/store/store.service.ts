import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { Store } from './entities/store/store';

@Injectable()
export class StoreService {
    constructor(
        @InjectRepository(Store)
        private readonly storeRepository: Repository<Store>,
    ) { }

    async create(createStoreDto: CreateStoreDto): Promise<Store> {
        const newStore = this.storeRepository.create(createStoreDto);
        return this.storeRepository.save(newStore);
    }

    async findAll(): Promise<Store[]> {
        return this.storeRepository.find({ relations: ['category', 'subCategories'] });
    }

    async findOne(id: string): Promise<Store> {
        const store = await this.storeRepository.findOne({
            where: { id },
            relations: ['category', 'subCategories'],
        });
        if (!store) {
            throw new NotFoundException(`Store with ID ${id} not found`);
        }
        return store;
    }

    async update(id: string, updateStoreDto: UpdateStoreDto): Promise<Store> {
        const store = await this.findOne(id);
        if (!store) {
            throw new NotFoundException(`Store with ID ${id} not found`);
        }
        Object.assign(store, updateStoreDto);
        return this.storeRepository.save(store);
    }

    async remove(id: string): Promise<void> {
        const result = await this.storeRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Store with ID ${id} not found`);
        }
    }
}
