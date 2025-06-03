import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Turno } from './domain/entities/turno.entity';
import { TurnoServicio } from './domain/entities/turno.servicio.entity';
import { TurnoServicioDatabaseRepository } from './infrastructure/repositories/turno.servicio.database.repository';
import { TurnoDatabaseRepository } from './infrastructure/repositories/turno.database.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Turno, TurnoServicio])],
  providers: [
    {
      provide: 'ITurnoRepository',
      useClass: TurnoDatabaseRepository,
    },
    {
      provide: 'ITurnoServicioRepository',
      useClass: TurnoServicioDatabaseRepository,
    },
  ],
})
export class TurnoModule {}
