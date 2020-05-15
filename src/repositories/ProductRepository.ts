import Product from '../models/Product';

export default class ProductRepository {
  private products: Array<Product>;

  constructor() {
    this.products = [];
  }

  public findAll(): Array<Product> {
    return this.products;
  }

  public findByCode(code: number): Product | undefined {
    return this.products.find(v => v.code === code);
  }

  public updateLove(code: number): Product {
    const filtered = this.products.filter(obj => obj.code === code);

    filtered.map(obj => {
      const p = obj;
      p.lovers += 1;
      return p;
    });

    return filtered[0];
  }

  public delete(code: number): Array<Product> {
    const index = this.products.findIndex(obj => obj.code === code);

    if (index === -1) {
      throw Error(`Não foi encontrado um produto com o código ${code}`);
    }

    this.products.splice(index, 1);
    return this.products;
  }

  public update(
    id: string,
    code: number,
    description: string,
    buyPrice: number,
    sellPrice: number,
    tags: Array<Product>,
  ): Product {
    const p = this.products.find(obj => obj.id === id);

    if (!p) {
      throw Error(`Não foi encontrado um produto com o id ${id}`);
    }

    p.code = code;
    p.description = description;
    p.buyPrice = buyPrice;
    p.sellPrice = sellPrice;
    p.tags = tags;

    return p;
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
