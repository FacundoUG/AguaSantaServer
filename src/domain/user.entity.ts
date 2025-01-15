import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Roles } from "./type";

@Entity('user')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id_user:string

    @Column({ type: 'int', nullable: false })
    username:string

    @Column({ type: 'varchar', nullable:false})
    password:string

    @Column({
        type: 'enum',
        enum: Roles,
        default: null,
        nullable: true
    })
    type:Roles
}