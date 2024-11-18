import { CollectionModel } from "src/modules/collection/entities/collection/collection";
import { Store } from "src/modules/store/entities/store/store";
import { SubCategory } from "src/modules/sub-category/entities/sub-category/sub-category";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  productId: string;



  @Column()
  collectionId: number;

  @Column()
  subcategoryId: number;


  @Column()
  storeId: number;

  @ManyToOne(() => CollectionModel, (collection) => collection.products, { nullable: false })
  collection: CollectionModel;

  @ManyToOne(() => SubCategory, (subcategory) => subcategory.products, { nullable: false })
  subcategory: SubCategory;

  @ManyToOne(() => Store, (store) => store.products, { nullable: false })
  store: Store;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column("decimal", { precision: 10, scale: 2 })
  price: number;

  @Column()
  stock: number;

  @Column("simple-array")
  sizes: string[];

  @Column("simple-array")
  colors: string[];

  @Column()
  coverImage: string;

  @Column("simple-array")
  images: string[];

  @Column({ default: false })
  isSpecial: boolean;
}
