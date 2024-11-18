import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { UpdateCategoryDto } from './dtos/update-category.dto';

@Controller('category')
export class CategoryController {
    constructor(
        private readonly categoryService: CategoryService
    ) { }

    @Post("create")
    async createCategory(@Body() category: CreateCategoryDto) {
        return await this.categoryService.create(category);
    }

    @Get("get-all")
    async getAllCategories() {
        return await this.categoryService.findAll();
    }

    @Get("get-category/:id")
    async getCategoryById(@Param("id") id: string) {
        return await this.categoryService.findOne(+id);
    }

    @Post("update/:id")
    async updateCategory(@Param("id") id: string, @Body() category: UpdateCategoryDto) {
        return await this.categoryService.update(+id, category);
    }
}
