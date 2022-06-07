import { User } from './User';
export class Model {
  name: string;
  items: User[];

  constructor() {
    this.name = 'Cavid';
    this.items = [
      new User('Cavid', 'Mahsumov', 17, new Date(2021, 09, 17)),
      new User('Vuqa', 'Garayli', 18, new Date(2021, 09, 17)),
    ];
  }
}
