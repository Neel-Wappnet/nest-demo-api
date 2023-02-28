import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.dto';

@Injectable()
export class ProductService {
  products: Product[] = [];

  addProduct(name: string, price: number, desc: string): string {
    const productId = new Date().toString();
    const newProduct: Product = { id: productId, name, price, desc };
    this.products.push(newProduct);
    return productId;
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  getProduct(id: string) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException();
    }
    return product;
  }

  updateProduct(id: string, name: string, price: number, desc: string) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );
    if (!productIndex) {
      throw new NotFoundException();
    }
    this.products[productIndex] = { id, name, price, desc };
    return id;
  }

  deleteProduct(id: string) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );
    if (!productIndex) {
      throw new NotFoundException();
    } else {
      this.products.splice(productIndex, 1);
    }
  }
}
