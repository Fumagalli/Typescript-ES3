import { Router } from 'express';
import ProductRepository from '../repositories/ProductRepository';
import CreateProductService from '../services/CreateProductService';

const productRouter = Router();
const productRepository = new ProductRepository();

productRouter.get('/', (request, response) => {
  response.json(productRepository.findAll());
});

productRouter.post('/', (request, response) => {
  try {
    const service = new CreateProductService(productRepository);
    const {
      buyPrice,
      code,
      description,
      lovers,
      sellPrice,
      tags,
      id,
    } = request.body;
    const produto = service.execute({
      buyPrice,
      code,
      description,
      lovers,
      sellPrice,
      tags,
      id,
    });
    return response.status(201).json(produto);
  } catch (error) {
    return response.status(400).json({ Erro: error.message });
  }
});

productRouter.put('/:id', (request, response) => {
  try {
    const { id, code, description, buyPrice, sellPrice, tags } = request.body;
    return response.json(
      productRepository.update(
        id,
        code,
        description,
        buyPrice,
        sellPrice,
        tags,
      ),
    );
  } catch (error) {
    return response.status(400).json({ Erro: error.message });
  }
});

productRouter.get('/:code', (request, response) => {
  try {
    const { code } = request.body;
    return response.json(productRepository.findByCode(code));
  } catch (error) {
    return response.status(400).json({ Erro: error.message });
  }
});

productRouter.post('/:code/love', (request, response) => {
  try {
    const { code } = request.body;
    return response.json(productRepository.updateLove(code));
  } catch (error) {
    return response.status(400).json({ Erro: error.message });
  }
});

productRouter.delete('/:code', (request, response) => {
  try {
    const { code } = request.body;
    return response.json(productRepository.delete(code));
  } catch (error) {
    return response.status(400).json({ Erro: error.message });
  }
});

export default productRouter;
