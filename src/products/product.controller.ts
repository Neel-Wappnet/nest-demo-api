import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class productController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  addProduct(
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('desc') desc: string,
  ) {
    const productId = this.productService.addProduct(name, price, desc);
    return productId;
  }

  @Get()
  getAllProduct() {
    const products = this.productService.getAllProducts();
    return products;
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    const product = this.productService.getProduct(id);
    return product;
  }

  @Put()
  updateProduct(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('desc') desc: string,
  ) {
    const productId = this.productService.updateProduct(id, name, price, desc);
    return productId;
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    const product = this.productService.deleteProduct(id);
    return product;
  }
}
