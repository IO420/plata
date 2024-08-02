import { Product } from "src/product/entity/product.entity";
import { Storage } from "src/storage/entity/storage.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'storage_details' })
export class StorageDetails {
    @PrimaryGeneratedColumn()
    id_storage_details: number;

    @ManyToOne(() => Storage, storage => storage.storageDetails)
    @JoinColumn({ name: 'id_storage', referencedColumnName:'id_storage',foreignKeyConstraintName:'Fk_storage' })
    storage: Storage;

    @ManyToOne(() => Product, product => product.storageDetails)
    @JoinColumn({ name: 'id_product', referencedColumnName:'id_product',foreignKeyConstraintName:'Fk_product' })
    product: Product;
}