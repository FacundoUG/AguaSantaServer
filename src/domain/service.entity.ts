import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ServiceType } from "./type";


@Entity('service')
export class Service{
    
    @PrimaryGeneratedColumn('uuid')
    id_service:string

    @Column({ type: 'varchar', length: 255 })
    name:string

    @Column({ type: 'int', nullable: false })
    duration:number

    @Column({type:'varchar', length: 255})
    color:string

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price:number

    @Column({
        type: 'enum',
        enum: ServiceType,
        default: ServiceType.AguaSanta,
    })
    type:ServiceType

}
