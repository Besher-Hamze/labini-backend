import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Controller('stores')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post("create")
  create(@Body() createStoreDto: CreateStoreDto) {
    return this.storeService.create(createStoreDto);
  }

  @Get("find-all")
  findAll() {
    return this.storeService.findAll();
  }

  @Get('find-one/:id')
  findOne(@Param('id') id: string) {
    return this.storeService.findOne(id);
  }

  @Post('update/:id')
  update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    return this.storeService.update(id, updateStoreDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.storeService.remove(id);
  }
}
