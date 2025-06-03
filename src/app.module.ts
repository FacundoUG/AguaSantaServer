import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './module/database/database.module';
import { ClientaModule } from './module/clienta/clienta.module';
import { TurnoModule } from './module/turno/turno.module';
import { ManicuristaModule } from './module/manicurista/manicurista.module';
import { ServicioModule } from './module/servicio/servicio.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    ServicioModule,
    ManicuristaModule,
    TurnoModule,
    ClientaModule,
  ],
  controllers: [],
  providers: [{ provide: Logger, useClass: Logger }],
  exports: [Logger],
})
export class AppModule {}
