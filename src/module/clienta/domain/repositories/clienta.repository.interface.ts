import { UpdateResult } from 'typeorm';
import { Clienta } from '../entities/clienta.entity';
import { ClientaBodyDTO } from '../../application/dto/clienta.body.dto';

export const IClientaRepository = Symbol('IClientaRepository');

export interface IClientaRepository {
  getById(clientaId: string): Promise<Clienta | null>;
  getByNombreAndTelefono(body: ClientaBodyDTO): Promise<Clienta | null>;
  getList(): Promise<Clienta[] | null>;
  create(clienta: Clienta): Promise<Clienta | null>;
  update(clienta: Clienta): Promise<Clienta>;
  softDeleted(clientaId: string): Promise<UpdateResult>;
}
