import { Injectable } from '@nestjs/common';
import { ITurnoRepository } from '../../domain/repositories/turno.repository';
import { Turno } from '../../domain/entities/turno.entity';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TurnoDatabaseRepository implements ITurnoRepository {
  constructor(
    @InjectRepository(Turno)
    private readonly turnoRepository: Repository<Turno>,
  ) {}

  public async getById(turnoId: string): Promise<Turno | null> {
    return this.turnoRepository.findOne({ where: { id: turnoId } });
  }

  public async create(turno: Turno): Promise<Turno | null> {
    return this.turnoRepository.save(turno);
  }

  public async update(turno: Turno): Promise<Turno> {
    return this.turnoRepository.save(turno);
  }

  public async softDeleted(turnoId: string): Promise<UpdateResult> {
    return this.turnoRepository.softDelete(turnoId);
  }
}
