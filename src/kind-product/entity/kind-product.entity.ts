import { Kind } from "src/kind/entity/kind.entity";
import { Product } from "src/product/entity/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'kind_product' })
export class KindProduct {
    @PrimaryGeneratedColumn()
    id_kind_product: number;

    @ManyToOne(() => Kind, kind => kind.kindProducts)
    @JoinColumn({ name: 'id_kind', referencedColumnName:'id_kind',foreignKeyConstraintName:'FK_kind' })
    kind: Kind;

    @ManyToOne(() => Product, product => product.kindProduct)
    @JoinColumn({ name: 'id_product', referencedColumnName:'id_product',foreignKeyConstraintName:'FK_product' })
    product: Product;
}