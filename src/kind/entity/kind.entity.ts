import { KindProduct } from "src/kind-product/entity/kind-product.entity";
import { Product } from "src/product/entity/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'kind' })
export class Kind {
    @PrimaryGeneratedColumn()
    id_kind: number;

    @Column()
    name: string;

    @OneToMany(() => KindProduct, kindProduct => kindProduct.kind)
    kindProduct: KindProduct;
}