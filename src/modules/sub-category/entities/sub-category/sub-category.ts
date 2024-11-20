import { Category } from "src/modules/category/entities/category/category";
import { CollectionModel } from "src/modules/collection/entities/collection/collection";
import { Product } from "src/modules/product/schema/product.entity";
import { Store } from "src/modules/store/entities/store/store";
import { Column, Entity, ManyToOne, ManyToMany, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class SubCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  imageUrl: string;

  @Column()
  categoryId: number;

  @ManyToOne(() => Category, (category) => category.subCategories, { nullable: false })
  category: Category;

  @OneToMany(() => CollectionModel, (collection) => collection.subCategory, { cascade: true })
  collections: CollectionModel[];

  @ManyToMany(() => Store, (store) => store.subCategories)
  stores: Store[];

  @OneToMany(() => Product, (product) => product.subcategory)
  products: Product[];
}
