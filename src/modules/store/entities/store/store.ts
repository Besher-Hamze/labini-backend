import { Category } from "src/modules/category/entities/category/category";
import { Product } from "src/modules/product/schema/product.entity";
import { SubCategory } from "src/modules/sub-category/entities/sub-category/sub-category";
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Store {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    imageUrl: string;

    @Column({ nullable: true, default: '' })
    description: string;

    @Column()
    country: string;

    @Column()
    city: string;

    @Column({ default: false })
    isIndividualSeller: boolean;

    @Column()
    categoryId: number;

    @ManyToOne(() => Category, (category) => category.stores, { nullable: false })
    category: Category;

    @Column({ default: 0 })
    likes: number;

    @Column({ default: 0 })
    followers: number;

    @Column({ default: false })
    providesReturn: boolean;

    @ManyToMany(() => SubCategory, (subcategory) => subcategory.stores, { cascade: true })
    @JoinTable()
    subCategories: SubCategory[];

    @OneToMany(() => Product, (product) => product.store)
    products: Product[];
}
