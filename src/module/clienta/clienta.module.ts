import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clienta } from './domain/entities/clienta.entity';
import { ClientaDatabaseRepository } from './infrastructure/repositories/clienta.database.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Clienta])],
  providers: [
    {
      provide: 'IClientaRepository',
      useClass: ClientaDatabaseRepository,
    },
  ],
})
export class ClientaModule {}
