import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('client')
export class Client{

    @PrimaryGeneratedColumn('uuid')
    id_client:string

    @Column({ type: 'varchar', length: 255 })
    fullName:string

    @Column({ type: 'int', nullable: false })
    phone:number

    @Column({ type: 'int', nullable: false })
    id_last_shift:number

    @Column({ type: 'boolean', nullable: false })
    banne:boolean

}