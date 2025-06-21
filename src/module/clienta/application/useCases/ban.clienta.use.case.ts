import { HttpException, HttpStatus, Inject } from '@nestjs/common';
import { IClientaRepository } from '../../domain/repositories/clienta.repository.interface';

export default class BanClientaUseCase {
  constructor(
    @Inject(IClientaRepository)
    private readonly clientaRepository: IClientaRepository,
  ) {}

  public async execute(clientaId: string): Promise<string> {
    await this.ban(clientaId);

    return 'La clienta fue baneada correctamente.';
  }

  private async ban(clientId: string): Promise<void> {
    try {
      await this.clientaRepository.softDeleted(clientId);
    } catch (error) {
      console.log('Ban.clienta.error', error);
      throw new HttpException(
        'No se pudo banear esta clienta',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
