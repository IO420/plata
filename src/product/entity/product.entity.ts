import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, JoinTable } from 'typeorm';
import { Kind } from 'src/kind/entity/kind.entity';
import { StorageDetails } from 'src/storage-details/entity/storage-details.entity';

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

  @Column()
  url: string;

  @ManyToMany(() => Kind, kind => kind.products)
  @JoinTable()
  kinds: Kind[];

  @OneToMany(() => StorageDetails, storageDetails => storageDetails.product)
  storageDetails: StorageDetails[];
}
