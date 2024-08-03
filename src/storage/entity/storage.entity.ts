import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StorageDetails } from 'src/storage-details/entity/storage-details.entity';

@Entity({ name: 'storage' })
export class Storage {
  @PrimaryGeneratedColumn()
  id_storage: number;

  @Column()
  date: string;

  @OneToMany(() => StorageDetails, storageDetails => storageDetails.storage)
  storageDetails: StorageDetails[];
}
