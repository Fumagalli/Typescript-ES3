import { uuid } from 'uuidv4';

export default class Ticket {
  id: string;

  description: string;

  tags: Array<Ticket>;

  constructor({ description, tags }: Omit<Ticket, 'id'>) {
    this.description = description;
    this.tags = tags;
    this.id = uuid();
  }
}
