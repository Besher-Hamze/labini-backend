import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCollectionDto {
    @IsString()
    name: string;

    @IsString()
    imageUrl: string;

    @IsNumber()
    @IsNotEmpty()
    subCategoryId: number;
}
