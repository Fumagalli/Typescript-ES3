import TicketRepository from '../repositories/TicketRepository';
import Ticket from '../models/Ticket';

export default class CreateTicketService {
  private repository: TicketRepository;

  constructor(repository: TicketRepository) {
    this.repository = repository;
  }

  public execute({ description, tags, productID }: Ticket): Ticket {
    const p = new Ticket({
      productID,
      description,
      tags,
    });

    this.repository.save(p);

    return p;
  }
}
