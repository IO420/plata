import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'storage'})
export class Storage{

    @PrimaryGeneratedColumn()
    id_storage:number

    @Column()
    date:string

}