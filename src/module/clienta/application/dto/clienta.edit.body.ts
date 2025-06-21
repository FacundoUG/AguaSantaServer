import { Type } from 'class-transformer';
import { IsDate, IsOptional, IsString } from 'class-validator';

export class ClientaEditBodyDTO {
  @IsString()
  id: string;

  @IsOptional()
  @IsString()
  telefono: string;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  ultimo_turno: Date;
}
