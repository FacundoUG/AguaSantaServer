import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clienta } from './domain/entities/clienta.entity';
import { ClientaDatabaseRepository } from './infrastructure/repositories/clienta.database.repository';
import { ClientaController } from './controller/clienta.controller';
import GetClientaListUseCase from './application/useCases/get.clienta.list.use.case';
import { IClientaRepository } from './domain/repositories/clienta.repository.interface';
import CreateClientaUseCase from './application/useCases/create.clienta.use.case';
import GetClientaUseCase from './application/useCases/get.clienta.use.case';
import EditClientaUseCase from './application/useCases/edit.clienta.use.case';
import BanClientaUseCase from './application/useCases/ban.clienta.use.case';

@Module({
  imports: [TypeOrmModule.forFeature([Clienta])],
  providers: [
    {
      provide: IClientaRepository,
      useClass: ClientaDatabaseRepository,
    },
    GetClientaListUseCase,
    GetClientaUseCase,
    CreateClientaUseCase,
    EditClientaUseCase,
    BanClientaUseCase,
  ],
  controllers: [ClientaController],
  exports: [TypeOrmModule],
})
export class ClientaModule {}
