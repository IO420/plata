import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({name:'user'})
export  class User{

    @PrimaryGeneratedColumn()
    id_user:number;

    @Column()
    name:string;

    @Column()
    username:string;

    @Column()
    password:string;

}