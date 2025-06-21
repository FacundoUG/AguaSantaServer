import {
  Controller,
  Post,
  Next,
  Res,
  UsePipes,
  ValidationPipe,
  HttpStatus,
  Get,
  Body,
  Req,
  Put,
  Delete,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import GetClientaListUseCase from '../application/useCases/get.clienta.list.use.case';
import CreateClientaUseCase from '../application/useCases/create.clienta.use.case';
import { ClientaBodyDTO } from '../application/dto/clienta.body.dto';
import GetClientaUseCase from '../application/useCases/get.clienta.use.case';
import { ClientaEditBodyDTO } from '../application/dto/clienta.edit.body';
import EditClientaUseCase from '../application/useCases/edit.clienta.use.case';
import BanClientaUseCase from '../application/useCases/ban.clienta.use.case';

@Controller('clienta')
export class ClientaController {
  constructor(
    private readonly listUseCase: GetClientaListUseCase,
    private readonly getUseCase: GetClientaUseCase,
    private readonly createUseCase: CreateClientaUseCase,
    private readonly updateUseCase: EditClientaUseCase,
    private readonly banUseCase: BanClientaUseCase,
  ) {}

  @Get()
  async getList(
    @Res() res: Response,
    @Next() next: NextFunction,
  ): Promise<void> {
    try {
      const response = await this.listUseCase.execute();
      res.status(HttpStatus.OK).send(response);
    } catch (error) {
      next(error);
    }
  }

  @Get('/:id')
  async get(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
  ): Promise<void> {
    try {
      const response = await this.getUseCase.execute(req.params.id);
      res.status(HttpStatus.OK).send(response);
    } catch (error) {
      next(error);
    }
  }

  @Post()
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )
  async create(
    @Body() nuevaClienta: ClientaBodyDTO,
    @Res() res: Response,
    @Next() next: NextFunction,
  ): Promise<void> {
    try {
      const response = await this.createUseCase.execute(nuevaClienta);
      res.status(HttpStatus.OK).send({ Respuesta: response });
    } catch (error) {
      next(error);
    }
  }

  @Put()
  async edit(
    @Body() clienta: ClientaEditBodyDTO,
    @Res() res: Response,
    @Next() next: NextFunction,
  ): Promise<void> {
    try {
      const response = await this.updateUseCase.execute(clienta);
      res.status(HttpStatus.OK).send({ Respuesta: response });
    } catch (error) {
      next(error);
    }
  }

  @Delete('/:id')
  async banear(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
  ): Promise<void> {
    try {
      const response = await this.banUseCase.execute(req.params.id);
      res.status(HttpStatus.OK).send({ Respuesta: response });
    } catch (error) {
      next(error);
    }
  }
}
