import ProductRepository from '../repositories/ProductRepository';
import Product from '../models/Product';

export default class DeleteProductService {
  private repository: ProductRepository;

  constructor(repository: ProductRepository) {
    this.repository = repository;
  }

  public execute({ id }: Product): Array<Product> {
    return this.repository.delete(id);
  }
}
