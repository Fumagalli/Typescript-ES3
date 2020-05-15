import TicketRepository from '../repositories/TicketRepository';
import Ticket from '../models/Ticket';

export default class CreateTicketService {
  private repository: TicketRepository;

  constructor(repository: TicketRepository) {
    this.repository = repository;
  }

  public execute({ description, tags }: Ticket): Ticket {
    const p = new Ticket({
      description,
      tags,
    });
    this.repository.save(p);

    return p;
  }
}
