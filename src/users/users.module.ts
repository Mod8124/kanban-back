import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './users.service';
import { MiddlewareMiddleware } from './middleware/middleware.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MiddlewareMiddleware).forRoutes('users'); // all
    //  .forRoutes({ path: 'users/:id', method: RequestMethod.GET }); // especic route
  }
}
