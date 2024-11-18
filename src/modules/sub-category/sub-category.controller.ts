import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateSubCategoryDto } from './dto/create-sub-category.dto';
import { UpdateSubCategoryDto } from './dto/update-sub-category.dto';
import { SubCategory } from './entities/sub-category/sub-category';
import { SubCategoryService } from './sub-category.service';

@Controller('sub-category')
export class SubCategoryController {
    constructor(private readonly SubCategorySevice: SubCategoryService) { }

    @Get("find-all")
    findAll(): Promise<SubCategory[]> {
        return this.SubCategorySevice.findAll();
    }

    @Get("find-one/:id")
    findOne(@Param("id") id: number): Promise<SubCategory> {
        return this.SubCategorySevice.findOne(id);
    }

    @Post("create")
    create(@Body() subCategory: CreateSubCategoryDto): Promise<SubCategory> {
        return this.SubCategorySevice.create(subCategory);
    }

    @Post("update/:id")
    update(@Param("id") id: number, @Body() updatedSubCategory: UpdateSubCategoryDto): Promise<SubCategory> {
        return this.SubCategorySevice.update(id, updatedSubCategory);
    }
}
