import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('middleware for authentication for todos only', req.path);
    next();
  }
}
