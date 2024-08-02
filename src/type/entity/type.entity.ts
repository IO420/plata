import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'type'})
export class typeDto{

    @PrimaryGeneratedColumn()
    id_type:number

    @Column()
    name:string

}