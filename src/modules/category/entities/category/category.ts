import { Store } from "src/modules/store/entities/store/store";
import { SubCategory } from "src/modules/sub-category/entities/sub-category/sub-category";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  imageUrl: string;

  @OneToMany(() => SubCategory, (subCategory) => subCategory.category)
  subCategories: SubCategory[];

  @OneToMany(() => Store, (store) => store.category)
  stores: Store[];
}
