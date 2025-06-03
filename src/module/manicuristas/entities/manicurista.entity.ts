import { Turno } from 'src/module/turno/entities/turno.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ schema: 'agua_santa', name: 'manicurista' })
export class Manicurista {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @OneToMany(() => Turno, (turno) => turno.manicurista)
  turnos: Turno[];
}
