import { Router } from 'express';
import TicketRepository from '../repositories/TicketRepository';
import CreateTicketService from '../services/CreateTicketService';

const ticketRouter = Router();
const ticketRepository = new TicketRepository();

ticketRouter.get('/', (request, response) => {
  response.json(ticketRepository.findAll());
});

ticketRouter.post('/', (request, response) => {
  try {
    const service = new CreateTicketService(ticketRepository);
    const { description, tags, id } = request.body;
    const ticket = service.execute({
      id,
      description,
      tags,
    });
    return response.status(201).json(ticket);
  } catch (error) {
    return response.status(400).json({ Erro: error.message });
  }
});

ticketRouter.get('/:id', (request, response) => {
  try {
    const { id } = request.body;
    return response.json(ticketRepository.findByid(id));
  } catch (error) {
    return response.status(400).json({ Erro: error.message });
  }
});

ticketRouter.delete('/:id', (request, response) => {
  try {
    const { id } = request.body;
    return response.json(ticketRepository.delete(id));
  } catch (error) {
    return response.status(400).json({ Erro: error.message });
  }
});

export default ticketRouter;
