import { Turno } from 'src/module/turno/entities/turno.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ schema: 'agua_santa', name: 'clienta' })
export class Clienta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 50, nullable: true })
  telefono: string;

  @Column({ default: false })
  baneada: boolean;

  @Column({ type: 'timestamp', name: 'ultimo_turno', nullable: true })
  ultimoTurno: Date;

  @OneToMany(() => Turno, (turno) => turno.clienta)
  turnos: Turno[];
}
