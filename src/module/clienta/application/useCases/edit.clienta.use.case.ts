import { HttpException, HttpStatus, Inject } from '@nestjs/common';
import { IClientaRepository } from '../../domain/repositories/clienta.repository.interface';
import { Clienta } from '../../domain/entities/clienta.entity';
import { ClientaEditBodyDTO } from '../dto/clienta.edit.body';

export default class EditClientaUseCase {
  constructor(
    @Inject(IClientaRepository)
    private readonly clientaRepository: IClientaRepository,
  ) {}

  public async execute(clienta: ClientaEditBodyDTO): Promise<string> {
    const clientaExistente = await this.validate(clienta.id);

    return await this.edit(clientaExistente, clienta);
  }

  private async edit(
    clientaExistente: Clienta,
    clienta: ClientaEditBodyDTO,
  ): Promise<string> {
    if (!clienta.telefono && !clienta.ultimo_turno)
      throw new HttpException(
        'No hay datos por modificiar.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    if (clienta.telefono) clientaExistente.telefono = clienta.telefono;
    if (clienta.ultimo_turno)
      clientaExistente.ultimoTurno = clienta.ultimo_turno;

    await this.clientaRepository.update(clientaExistente);

    return 'Se actualizo la clienta correctmente.';
  }

  private async validate(idClienta: string): Promise<Clienta> {
    const clienta = await this.clientaRepository.getById(idClienta);

    if (!clienta)
      throw new HttpException('No existe esta clienta', HttpStatus.NOT_FOUND);

    return clienta;
  }
}
