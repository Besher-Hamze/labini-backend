import { Product } from 'src/modules/product/schema/product.entity';
import { SubCategory } from 'src/modules/sub-category/entities/sub-category/sub-category';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity({name:"collection"})
export class CollectionModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    imageUrl: string;

    @Column()
    subCategoryId: number;

    @ManyToOne(() => SubCategory, (subCategory) => subCategory.collections)
    subCategory: SubCategory;

    @OneToMany(() => Product, (product) => product.collection)
    products: Product[];
  
}
