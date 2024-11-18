import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { CreateProductDto } from "./dtos/create-product.dto";
import { UpdateProductDto } from "./dtos/update-product.dto";
import { ProductService } from "./product.service";
@Controller("products")
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Post("create")
    create(@Body() createProductDto: CreateProductDto) {
        return this.productService.create(createProductDto);
    }

    @Get("find-all")
    findAll() {
        return this.productService.findAll();
    }

    @Get("find-one/:id")
    findOne(@Param("id") productId: string) {
        return this.productService.findOne(productId);
    }

    @Post("update/:id")
    update(@Param("id") productId: string, @Body() updateProductDto: UpdateProductDto) {
        return this.productService.update(productId, updateProductDto);
    }

    @Delete("delete/:id")
    remove(@Param("id") productId: string) {
        return this.productService.remove(productId);
    }
}
