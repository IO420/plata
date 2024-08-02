import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'kind_product'})
export class KindProduct{

    @PrimaryGeneratedColumn()
    id_kind_product:number

    @Column()
    id_kind:number

    @Column()
    id_product:number

}