import ProductRepository from '../repositories/ProductRepository';
import Product from '../models/Product';

export default class UpdateProductService {
  private repository: ProductRepository;

  constructor(repository: ProductRepository) {
    this.repository = repository;
  }

  public execute(id: string, data: Product): Product {
    const { code, description, buyPrice, lovers, sellPrice, tags } = data;

    return this.repository.update({
      id,
      code,
      description,
      buyPrice,
      sellPrice,
      tags,
      lovers,
    });
  }
}
