import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';

@Controller('collections')
export class CollectionController {
    constructor(private readonly collectionService: CollectionService) { }

    @Post("create")
    create(@Body() createCollectionDto: CreateCollectionDto) {
        return this.collectionService.create(createCollectionDto);
    }

    @Get("find-all")
    findAll() {
        return this.collectionService.findAll();
    }

    @Get('find-one/:id')
    findOne(@Param('id') id: string) {
        return this.collectionService.findOne(+id);
    }

    @Post('update/:id')
    update(@Param('id') id: string, @Body() updateCollectionDto: UpdateCollectionDto) {
        return this.collectionService.update(+id, updateCollectionDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.collectionService.remove(+id);
    }
}
