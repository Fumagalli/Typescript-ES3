import Product from '../models/Product';

export default class ProductRepository {
  private aProducts: Array<Product>;

  constructor() {
    this.aProducts = [];
  }

  public set products(value: Array<Product>) {
    this.aProducts = value;
  }

  public get products(): Array<Product> {
    return this.aProducts;
  }

  public updateProducts(products: Array<Product>): Array<Product> {
    this.products = products;
    return this.products;
  }

  public findAll(): Array<Product> {
    return this.products;
  }

  public findByCode(code: number): Array<Product> {
    return this.products.filter(v => v.code === code);
  }

  public findById(id: string): Product | undefined {
    return this.products.find(v => v.id === id);
  }

  public delete(id: string): Array<Product> {
    const product = this.findById(id);

    if (!product) {
      throw Error(`Não foi encontrado um produto com o código ${id}`);
    }

    const index = this.products.findIndex(obj => obj.id === id);

    this.products.splice(index, 1);

    return this.products;
  }

  public update({
    id,
    buyPrice,
    code,
    description,
    sellPrice,
    tags,
  }: Product): Product {
    const product = this.findById(id);

    if (!product) {
      throw Error(`Não foi encontrado um produto com o id ${id}`);
    }

    product.code = code;
    product.description = description;
    product.buyPrice = buyPrice;
    product.sellPrice = sellPrice;
    product.tags = tags;

    return product;
  }

  public save({
    buyPrice,
    code,
    description,
    lovers,
    sellPrice,
    tags,
  }: Product): Product {
    const product = new Product({
      buyPrice,
      code,
      description,
      lovers,
      sellPrice,
      tags,
    });
    this.products.push(product);
    return product;
  }
}
