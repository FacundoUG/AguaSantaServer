import { Injectable } from '@nestjs/common';
import { IManicuristaRepository } from '../../domain/repositories/manicurista.repository';
import { Manicurista } from '../../domain/entities/manicurista.entity';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ManicuristaDatabaseRepository implements IManicuristaRepository {
  constructor(
    @InjectRepository(Manicurista)
    private readonly manicuristaRepository: Repository<Manicurista>,
  ) {}

  public async getById(manicuristaId: string): Promise<Manicurista | null> {
    return this.manicuristaRepository.findOne({ where: { id: manicuristaId } });
  }

  public async create(manicurista: Manicurista): Promise<Manicurista | null> {
    return this.manicuristaRepository.save(manicurista);
  }

  public async update(manicurista: Manicurista): Promise<Manicurista> {
    return this.manicuristaRepository.save(manicurista);
  }

  public async softDeleted(manicuristaId: string): Promise<UpdateResult> {
    return this.manicuristaRepository.softDelete(manicuristaId);
  }
}
