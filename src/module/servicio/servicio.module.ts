import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Servicio } from './domain/entities/servicio.entity';
import { ServicioDatabaseRepository } from './infrastructure/repositories/servicio.database.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Servicio])],
  providers: [
    {
      provide: 'IServicioRepository',
      useClass: ServicioDatabaseRepository,
    },
  ],
})
export class ServicioModule {}
