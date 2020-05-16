import { uuid } from 'uuidv4';

export default class Ticket {
  id: string;

  productID: string;

  description: string;

  tags: Array<Ticket>;

  constructor({ description, tags, productID }: Omit<Ticket, 'id'>) {
    this.productID = productID;
    this.description = description;
    this.tags = tags;
    this.id = uuid();
  }
}
