import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'kind'})
export class Kind{

    @PrimaryGeneratedColumn()
    id_kind:number

    @Column()
    name:string

}