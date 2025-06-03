import { Turno } from 'src/module/turno/domain/entities/turno.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  DeleteDateColumn,
} from 'typeorm';

@Entity({ schema: 'agua_santa', name: 'manicurista' })
export class Manicurista {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  nombre: string;

  @DeleteDateColumn()
  deleted: Date;

  @OneToMany(() => Turno, (turno) => turno.manicurista)
  turnos: Turno[];
}
