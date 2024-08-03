import { KindProduct } from 'src/kind-product/entity/kind-product.entity';
import { StorageDetails } from 'src/storage-details/entity/storage-details.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToMany(() => StorageDetails, (storageDetails) => storageDetails.product)
  storageDetails: StorageDetails[];

  @OneToMany(() => KindProduct, (KindProduct) => KindProduct.product)
  kindProduct: KindProduct;
}
