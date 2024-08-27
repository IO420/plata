import { Product } from 'src/product/entity/product.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'kind' })
export class Kind {
  @PrimaryGeneratedColumn()
  id_kind: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @ManyToMany(() => Product, product => product.kinds)
  products: Product[];
}
