import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'product'})
export class Product{

    @PrimaryGeneratedColumn()
    id_product:number

    @Column()
    name:string

    @Column()
    description:string

    @Column()
    price:number
}