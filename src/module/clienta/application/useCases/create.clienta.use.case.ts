import { HttpException, HttpStatus, Inject } from '@nestjs/common';
import { IClientaRepository } from '../../domain/repositories/clienta.repository.interface';
import { ClientaBodyDTO } from '../dto/clienta.body.dto';
import { Clienta } from '../../domain/entities/clienta.entity';

export default class CreateClientaUseCase {
  constructor(
    @Inject(IClientaRepository)
    private readonly clientaRepository: IClientaRepository,
  ) {}

  public async execute(nuevaClienta: ClientaBodyDTO): Promise<string> {
    return await this.create(nuevaClienta);
  }

  private async create(nuevaClienta: ClientaBodyDTO): Promise<string> {
    const clienta = new Clienta();
    await this.validation(nuevaClienta);

    clienta.nombre = nuevaClienta.nombre;
    clienta.telefono = nuevaClienta.telefono;

    try {
      await this.clientaRepository.create(clienta);
      return 'Se creo correctamente la clienta.';
    } catch (error) {
      console.log('Create.Clienta.error', error);
      throw new HttpException(
        'No se pudo crear la clienta',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  private async validation(nuevaClienta: ClientaBodyDTO): Promise<void> {
    const clientaValidation =
      await this.clientaRepository.getByNombreAndTelefono(nuevaClienta);

    if (clientaValidation)
      throw new HttpException('Clienta existente.', HttpStatus.FOUND);
  }
}
