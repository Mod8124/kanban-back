import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { HttpStatusCode } from 'axios';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class MiddlewareMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('hola hi im middleware');
    const { authorization } = req.headers;
    if (!authorization)
      throw new HttpException('no authorization', HttpStatusCode.Forbidden);

    if (authorization === 'hola') next();
    else throw new HttpException('no valid lfamo', HttpStatusCode.Forbidden);
  }
}
