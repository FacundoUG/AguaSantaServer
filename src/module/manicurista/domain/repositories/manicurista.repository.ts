import { UpdateResult } from 'typeorm';
import { Manicurista } from '../entities/manicurista.entity';

export const IManicuristaRepository = Symbol('IManicuristaRepository');

export interface IManicuristaRepository {
  getById(manicuristaId: string): Promise<Manicurista | null>;
  create(manicurista: Manicurista): Promise<Manicurista | null>;
  update(manicurista: Manicurista): Promise<Manicurista>;
  softDeleted(manicuristaId: string): Promise<UpdateResult>;
}
