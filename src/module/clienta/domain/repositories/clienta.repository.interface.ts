import { UpdateResult } from 'typeorm';
import { Clienta } from '../entities/clienta.entity';

export const IClientaRepository = Symbol('IClientaRepository');

export interface IClientaRepository {
  getById(clientaId: string): Promise<Clienta | null>;
  create(clienta: Clienta): Promise<Clienta | null>;
  update(clienta: Clienta): Promise<Clienta>;
  softDeleted(clientaId: string): Promise<UpdateResult>;
}
