import { Injectable } from '@nestjs/common';
import { IClientaRepository } from '../../domain/repositories/clienta.repository.interface';
import { Clienta } from '../../domain/entities/clienta.entity';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientaBodyDTO } from '../../application/dto/clienta.body.dto';

@Injectable()
export class ClientaDatabaseRepository implements IClientaRepository {
  constructor(
    @InjectRepository(Clienta)
    private readonly clientaRepository: Repository<Clienta>,
  ) {}

  public async getById(clientaId: string): Promise<Clienta | null> {
    return this.clientaRepository.findOne({
      where: { id: clientaId },
      relations: ['turnos'],
    });
  }

  public async getByNombreAndTelefono(
    body: ClientaBodyDTO,
  ): Promise<Clienta | null> {
    return this.clientaRepository.findOne({
      where: {
        nombre: body.nombre,
        telefono: body.telefono,
      },
    });
  }

  public async getList(): Promise<Clienta[] | null> {
    return this.clientaRepository.find();
  }

  public async create(clienta: Clienta): Promise<Clienta | null> {
    return this.clientaRepository.save(clienta);
  }

  public async update(clienta: Clienta): Promise<Clienta> {
    return this.clientaRepository.save(clienta);
  }

  public async softDeleted(clientaId: string): Promise<UpdateResult> {
    return this.clientaRepository.softDelete(clientaId);
  }
}
