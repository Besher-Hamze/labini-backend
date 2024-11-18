import { IsString, IsNumber, IsArray, IsBoolean, IsNotEmpty, IsOptional, IsUUID } from "class-validator";

export class CreateProductDto {
  @IsNumber()
  @IsNotEmpty()
  collectionId: number;

  @IsNumber()
  @IsNotEmpty()
  subcategoryId: number;

  @IsNumber()
  @IsNotEmpty()
  storeId: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  stock: number;

  @IsArray()
  @IsNotEmpty()
  sizes: string[];

  @IsArray()
  @IsNotEmpty()
  colors: string[];

  @IsString()
  @IsNotEmpty()
  coverImage: string;

  @IsArray()
  @IsNotEmpty()
  images: string[];

  @IsBoolean()
  @IsOptional()
  isSpecial?: boolean;
}
