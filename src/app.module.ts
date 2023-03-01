import { Module } from '@nestjs/common';
import { ProductModule } from './products/product.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';

@Module({
  imports: [ProductModule, AuthModule, UsersModule],
  controllers: [AppController],
})
export class AppModule {}
