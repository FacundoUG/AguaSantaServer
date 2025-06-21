import { HttpException, HttpStatus, Inject } from '@nestjs/common';
import ClientaListResponse from '../response/clienta.list.response';
import { IClientaRepository } from '../../domain/repositories/clienta.repository.interface';

export default class GetClientaListUseCase {
  constructor(
    @Inject(IClientaRepository)
    private readonly clientaRepository: IClientaRepository,
  ) {}

  public async execute(): Promise<ClientaListResponse[]> {
    const clientasBD = await this.clientaRepository.getList();

    if (!clientasBD) {
      throw new HttpException('Clienta no encontrada', HttpStatus.NOT_FOUND);
    }

    return clientasBD.map((clientaBD) => {
      return {
        id: clientaBD.id,
        nombre: clientaBD.nombre,
        ultimo_turno: clientaBD.ultimoTurno,
      };
    });
  }
}
