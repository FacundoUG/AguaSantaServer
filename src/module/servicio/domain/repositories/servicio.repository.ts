import { UpdateResult } from 'typeorm';
import { Servicio } from '../entities/servicio.entity';

export const IServicioRepository = Symbol('IServicioRepository');

export interface IServicioRepository {
  getById(servicioId: string): Promise<Servicio | null>;
  create(servicio: Servicio): Promise<Servicio | null>;
  update(servicio: Servicio): Promise<Servicio>;
  softDeleted(servicioId: string): Promise<UpdateResult>;
}
