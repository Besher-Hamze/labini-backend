import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateSubCategoryDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    imageUrl?: string;

    @IsNumber()
    @IsNotEmpty()
    categoryId: number;
}
