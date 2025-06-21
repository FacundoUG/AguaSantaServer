import { Turno } from 'src/module/turno/domain/entities/turno.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  DeleteDateColumn,
} from 'typeorm';

@Entity({ schema: 'agua_santa', name: 'clienta' })
export class Clienta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 50, nullable: true })
  telefono: string;

  @Column({ type: 'timestamp', name: 'ultimo_turno', nullable: true })
  ultimoTurno: Date;

  @DeleteDateColumn({ nullable: true })
  deleted: Date;

  @OneToMany(() => Turno, (turno) => turno.clienta)
  turnos: Turno[];
}
