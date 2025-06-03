import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Turno } from './turno.entity';
import { Servicio } from 'src/module/servicio/entities/servicio.entity';

@Entity({ schema: 'agua_santa', name: 'turno_servicio' })
export class TurnoServicio {
  @PrimaryColumn({ name: 'id_turno' })
  idTurno: number;

  @PrimaryColumn({ name: 'id_servicio' })
  idServicio: number;

  @ManyToOne(() => Turno, (turno) => turno.turnoServicios, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'id_turno' })
  turno: Turno;

  @ManyToOne(() => Servicio, (servicio) => servicio.turnoServicios, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'id_servicio' })
  servicio: Servicio;
}
