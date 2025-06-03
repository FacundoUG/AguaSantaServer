import { TurnoServicio } from 'src/module/turno/domain/entities/turno.servicio.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  DeleteDateColumn,
} from 'typeorm';

@Entity({ schema: 'agua_santa', name: 'servicio' })
export class Servicio {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  color: string;

  @Column({ name: 'tipo_de_precio', length: 100 })
  tipoDePrecio: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precio: number;

  @Column({ type: 'timestamp', name: 'ultima_actualizacion', nullable: true })
  ultimaActualizacion: Date;

  @DeleteDateColumn()
  deleted: Date;

  @OneToMany(() => TurnoServicio, (turnoServicio) => turnoServicio.servicio)
  turnoServicios: TurnoServicio[];
}
