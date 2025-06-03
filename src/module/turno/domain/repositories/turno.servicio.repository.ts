import { TurnoServicio } from '../entities/turno.servicio.entity';

export const ITurnoServicioRepository = Symbol('ITurnoServicioRepository');

export interface ITurnoServicioRepository {
  getByTurnoId(turnoId: string): Promise<TurnoServicio[] | null>;
  create(turnoServicio: TurnoServicio): Promise<TurnoServicio | null>;
}
