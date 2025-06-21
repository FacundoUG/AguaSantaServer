import { Inject } from '@nestjs/common';
import { IClientaRepository } from '../../domain/repositories/clienta.repository.interface';

export default class GetClientaUseCase {
  constructor(
    @Inject(IClientaRepository)
    private readonly clientaRepository: IClientaRepository,
  ) {}

  public async execute(idClienta: string) {
    return this.get(idClienta);
  }

  private async get(idClienta: string) {
    return await this.clientaRepository.getById(idClienta);
  }
}
