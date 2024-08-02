import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'storage_details'})
export class StorageDetails{

    @PrimaryGeneratedColumn()
    id_storage_details:number

    @Column()
    id_storage:number

    @Column()
    id_product:number
}