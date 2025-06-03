import { UpdateResult } from 'typeorm';
import { Turno } from '../entities/turno.entity';

export const ITurnoRepository = Symbol('ITurnoRepository');

export interface ITurnoRepository {
  getById(turnoId: string): Promise<Turno | null>;
  create(turno: Turno): Promise<Turno | null>;
  update(turno: Turno): Promise<Turno>;
  softDeleted(turnoId: string): Promise<UpdateResult>;
}
