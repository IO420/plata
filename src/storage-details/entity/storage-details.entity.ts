import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Product } from 'src/product/entity/product.entity';
import { Storage } from 'src/storage/entity/storage.entity';

@Entity({ name: 'storage_details' })
export class StorageDetails {
  @PrimaryGeneratedColumn()
  id_storage_details: number;

  @ManyToOne(() => Storage, storage => storage.storageDetails)
  @JoinColumn({ name: 'id_storage', referencedColumnName: 'id_storage' })
  storage: Storage;

  @ManyToOne(() => Product, product => product.storageDetails)
  @JoinColumn({ name: 'id_product', referencedColumnName: 'id_product' })
  product: Product;

  @Column('int') // Define column type for quantity
  quantity: number;
}
