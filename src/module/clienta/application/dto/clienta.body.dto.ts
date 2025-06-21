import { IsString } from 'class-validator';

export class ClientaBodyDTO {
  @IsString()
  nombre: string;

  @IsString()
  telefono: string;
}
