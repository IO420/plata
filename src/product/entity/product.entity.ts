import { KindProduct } from "src/kind-product/entity/kind-product.entity";
import { Kind } from "src/kind/entity/kind.entity";
import { StorageDetails } from "src/storage-details/entity/storage-details.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'product' })
export class Product {
    @PrimaryGeneratedColumn()
    id_product: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @OneToMany(() => StorageDetails, storageDetails => storageDetails.product)
    storageDetails: StorageDetails[];

    @ManyToOne(() => KindProduct, KindProduct => KindProduct.product)
    @JoinColumn({ name: 'id_kind_product', referencedColumnName:'id_kind_product',foreignKeyConstraintName:'FK_kind_product'  })
    kindProduct: KindProduct;
}