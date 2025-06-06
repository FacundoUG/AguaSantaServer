import { Injectable } from '@nestjs/common';
import { ITurnoServicioRepository } from '../../domain/repositories/turno.servicio.repository';
import { TurnoServicio } from '../../domain/entities/turno.servicio.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TurnoServicioDatabaseRepository
  implements ITurnoServicioRepository
{
  constructor(
    @InjectRepository(TurnoServicio)
    private readonly turnoServicioRepository: Repository<TurnoServicio>,
  ) {}

  public async getByTurnoId(turnoId: string): Promise<TurnoServicio[] | null> {
    return this.turnoServicioRepository.find({
      where: { turno: { id: turnoId } },
    });
  }

  public async create(
    turnoServicio: TurnoServicio,
  ): Promise<TurnoServicio | null> {
    return this.turnoServicioRepository.save(turnoServicio);
  }
}
