import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { productController } from './product.controller';

@Module({
  providers: [ProductService],
  controllers: [productController],
})
export class ProductModule {}
