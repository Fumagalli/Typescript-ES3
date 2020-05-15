import Ticket from '../models/Ticket';

export default class ProductRepository {
  private tickets: Array<Ticket>;

  constructor() {
    this.tickets = [];
  }

  public findAll(): Array<Ticket> {
    return this.tickets;
  }

  public findByid(id: string): Ticket | undefined {
    return this.tickets.find(v => v.id === id);
  }

  public delete(id: string): Array<Ticket> {
    const index = this.tickets.findIndex(obj => obj.id === id);

    if (index === -1) {
      throw Error(`Não foi encontrado um ticket com o id ${id}`);
    }

    this.tickets.splice(index, 1);
    return this.tickets;
  }

  public save({ description, tags }: Ticket): Ticket {
    const ticket = new Ticket({
      description,
      tags,
    });
    this.tickets.push(ticket);
    return ticket;
  }
}
