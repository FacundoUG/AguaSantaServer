import { Clienta } from 'src/module/clienta/entities/clienta.entity';
import { Manicurista } from 'src/module/manicuristas/entities/manicurista.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { TurnoServicio } from './turno.servicio.entity';

@Entity({ schema: 'agua_santa', name: 'turno' })
export class Turno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', name: 'dia_horario' })
  diaHorario: Date;

  @ManyToOne(() => Clienta, (clienta) => clienta.turnos)
  clienta: Clienta;

  @ManyToOne(() => Manicurista, (manicurista) => manicurista.turnos)
  manicurista: Manicurista;

  @Column({ length: 100, default: 'PENDIENTE' })
  estado: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  precio: number;

  @CreateDateColumn({ name: 'creado_en' })
  creadoEn: Date;

  @OneToMany(() => TurnoServicio, (turnoServicio) => turnoServicio.turno, {
    cascade: true,
  })
  turnoServicios: TurnoServicio[];
}

