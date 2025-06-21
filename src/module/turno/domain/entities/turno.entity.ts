import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  DeleteDateColumn,
  JoinColumn,
} from 'typeorm';
import { Clienta } from 'src/module/clienta/domain/entities/clienta.entity';
import { Manicurista } from 'src/module/manicurista/domain/entities/manicurista.entity';
import { TurnoServicio } from './turno.servicio.entity';

@Entity({ schema: 'agua_santa', name: 'turno' })
export class Turno {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp', name: 'incio_turno' })
  incio_turno: Date;

  @Column({ type: 'timestamp', name: 'final_turno' })
  final_turno: Date;

  @ManyToOne(() => Clienta, (clienta) => clienta.turnos)
  @JoinColumn({ name: 'clienta_id' })
  clienta: Clienta;

  @ManyToOne(() => Manicurista, (manicurista) => manicurista.turnos)
  @JoinColumn({ name: 'manicurista_id' })
  manicurista: Manicurista;

  @Column({ length: 100, default: 'PENDIENTE' })
  estado: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  precio: number;

  @CreateDateColumn({ name: 'creado_en' })
  creadoEn: Date;

  @DeleteDateColumn()
  deleted: Date;

  @OneToMany(() => TurnoServicio, (turnoServicio) => turnoServicio.turno, {
    cascade: true,
  })
  turnoServicios: TurnoServicio[];
}
