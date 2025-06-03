import { Injectable } from '@nestjs/common';
import { IServicioRepository } from '../../domain/repositories/servicio.repository';
import { Servicio } from '../../domain/entities/servicio.entity';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ServicioDatabaseRepository implements IServicioRepository {
  constructor(
    @InjectRepository(Servicio)
    private readonly servicioRepository: Repository<Servicio>,
  ) {}

  public async getById(servicioId: string): Promise<Servicio | null> {
    return this.servicioRepository.findOne({ where: { id: servicioId } });
  }

  public async create(servicio: Servicio): Promise<Servicio | null> {
    return this.servicioRepository.save(servicio);
  }

  public async update(servicio: Servicio): Promise<Servicio> {
    return this.servicioRepository.save(servicio);
  }

  public async softDeleted(servicioId: string): Promise<UpdateResult> {
    return this.servicioRepository.softDelete(servicioId);
  }
}
