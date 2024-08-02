import { User } from "src/user/entity/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'type'})
export class Type{

    @PrimaryGeneratedColumn()
    id_type:number

    @Column()
    name:string

    @OneToMany(()=>User,user=>user.type)
    user:User;


}