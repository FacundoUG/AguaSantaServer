import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DatabaseService } from './infrastructure/database/database.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const configService:ConfigService = app.get(ConfigService)
  const databaseService:DatabaseService = app.get(DatabaseService)
  const port:number = configService.get<number>('PORT') || 3000

  await app.listen(port)
  await databaseService.checkConnection()
  console.log(`🚀 Application is running on: http://localhost:${port}`)
}

bootstrap();
