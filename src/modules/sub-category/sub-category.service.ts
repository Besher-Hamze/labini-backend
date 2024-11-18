import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubCategoryDto } from './dto/create-sub-category.dto';
import { UpdateSubCategoryDto } from './dto/update-sub-category.dto';
import { SubCategory } from './entities/sub-category/sub-category';

@Injectable()
export class SubCategoryService {

    constructor(
        @InjectRepository(SubCategory)
        private readonly subCategoryRepository: Repository<SubCategory>,
    ) { }

    async findAll(): Promise<SubCategory[]> {
        return await this.subCategoryRepository.find();
    }

    async findOne(id: number): Promise<SubCategory> {
        return await this.subCategoryRepository.findOne({ where: { id: id } });
    }

    async create(subCategory: CreateSubCategoryDto): Promise<SubCategory> {
        return await this.subCategoryRepository.save(subCategory);
    }

    async update(id: number, updatedSubCategory: UpdateSubCategoryDto): Promise<SubCategory> {
        await this.subCategoryRepository.update(id, updatedSubCategory);
        return await this.findOne(id);
    }
}
