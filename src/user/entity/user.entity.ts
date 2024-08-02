import { Type } from 'src/type/entity/type.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

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

    @ManyToOne(()=>Type,type=>type.id_type)
    @JoinColumn({name:'id_type',referencedColumnName:'id_type',foreignKeyConstraintName:'Fk_type'})
    type:Type

}