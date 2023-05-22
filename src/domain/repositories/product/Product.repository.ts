import { ProductEntity } from '../../entity';

export interface ProductRepository {
  findAll(): Promise<ProductEntity[]>;
  create(product: ProductEntity): Promise<ProductEntity | void>;
  update(id: string, product: ProductEntity): Promise<void>;
  delete(id: string): Promise<void>;
}
