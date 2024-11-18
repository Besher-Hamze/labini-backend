import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CollectionModel } from './entities/collection/collection';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';

@Injectable()
export class CollectionService {
    constructor(
        @InjectRepository(CollectionModel)
        private readonly collectionRepository: Repository<CollectionModel>,
    ) {}

    async create(createCollectionDto: CreateCollectionDto): Promise<CollectionModel> {
        const collection = this.collectionRepository.create(createCollectionDto);
        return this.collectionRepository.save(collection);
    }

    async findAll(): Promise<CollectionModel[]> {
        return this.collectionRepository.find({ relations: ['subCategory'] });
    }

    async findOne(id: number): Promise<CollectionModel> {
        const collection = await this.collectionRepository.findOne({
            where: { id },
            relations: ['subCategory'],
        });
        if (!collection) {
            throw new NotFoundException(`Collection with ID ${id} not found`);
        }
        return collection;
    }

    async update(id: number, updateCollectionDto: UpdateCollectionDto): Promise<CollectionModel> {
        const collection = await this.findOne(id);
        Object.assign(collection, updateCollectionDto);
        return this.collectionRepository.save(collection);
    }

    async remove(id: number): Promise<void> {
        const collection = await this.findOne(id);
        await this.collectionRepository.remove(collection);
    }
}
