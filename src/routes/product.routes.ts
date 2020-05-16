import { Router } from 'express';
import ProductRepository from '../repositories/ProductRepository';
import CreateProductService from '../services/CreateProductService';
import UpdateProductService from '../services/UpdateProductService';
import UpdateLoverProductService from '../services/UpdateLoverProductService';

const productRouter = Router();
const productRepository = new ProductRepository();

productRouter.get('/', (request, response) => {
  response.json(productRepository.findAll());
});

productRouter.post('/', (request, response) => {
  try {
    const service = new CreateProductService(productRepository);
    const produto = service.execute(request.body);
    return response.status(201).json({ message: 'Sucesso', data: produto });
  } catch (error) {
    return response.status(400).json({ Erro: error.message });
  }
});

productRouter.put('/:id', (request, response) => {
  try {
    const service = new UpdateProductService(productRepository);
    const produto = service.execute(request.params.id, request.body);
    return response.status(201).json(produto);
  } catch (error) {
    return response.status(400).json({ Erro: error.message });
  }
});

productRouter.get('/:code', (request, response) => {
  try {
    // rever para pegar o code do request e tratar para string virar number;
    const { code } = request.body;
    return response.json(productRepository.findByCode(code));
  } catch (error) {
    return response.status(400).json({ Erro: error.message });
  }
});

productRouter.post('/:code/love', (request, response) => {
  try {
    // rever para pegar o code do request e tratar para string virar number;
    const { code } = request.body;
    const service = new UpdateLoverProductService(productRepository);
    const products = service.execute(code);

    return response.json(products);
  } catch (error) {
    return response.status(400).json({ Erro: error.message });
  }
});

productRouter.delete('/:id', (request, response) => {
  try {
    const { id } = request.params;
    return response.json(productRepository.delete(id));
  } catch (error) {
    return response.status(400).json({ Erro: error.message });
  }
});

export default productRouter;
