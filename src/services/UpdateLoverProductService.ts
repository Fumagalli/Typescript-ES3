import ProductRepository from '../repositories/ProductRepository';
import Product from '../models/Product';

export default class UpdateLoverProductService {
  private repository: ProductRepository;

  constructor(repository: ProductRepository) {
    this.repository = repository;
  }

  public execute(code: number): Array<Product> {
    const products = this.repository.findAll();
    products.map((obj: Product) => {
      const product = obj;

      if (product.code === code) {
        product.lovers += 1;
      }

      return product;
    });

    return this.repository.updateProducts(products);
  }
}
