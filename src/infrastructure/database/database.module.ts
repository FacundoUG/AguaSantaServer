import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from './database.service';
import { Service } from 'src/domain/service.entity';
import { User } from 'src/domain/user.entity';
import { Client } from 'src/domain/client.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        const dbUrl = configService.get<string>('DATABASE_URL');
        const profile = configService.get<string>('PROFILE');
        
        if (!dbUrl || !profile) {
          throw new Error('DATABASE_URL or PROFILE is not configured');
        }
        
        return {
          type: 'postgres',
          url: dbUrl,
          autoLoadEntities: true,
          synchronize: profile === 'DEV',
          ssl: profile === 'PROD' && { rejectUnauthorized: false },
          entities:[Service,User,Client]
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [DatabaseService],
  exports: [TypeOrmModule,DatabaseService],
})
export class DatabaseModule {}
