import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Manicurista } from './domain/entities/manicurista.entity';
import { ManicuristaDatabaseRepository } from './infrastructure/repositories/manicurista.database.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Manicurista])],
  providers: [
    {
      provide: 'IManicuristaRepository',
      useClass: ManicuristaDatabaseRepository,
    },
  ],
})
export class ManicuristaModule {}
