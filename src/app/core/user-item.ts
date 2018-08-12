import { User } from './user.model';

export class UserItem implements User {
  id: number;
  firstName: string;
  lastName: string;

  constructor(id: any, firstName: any, lastName: any) {
      this.id = parseInt(id, 10);
      this.firstName = firstName.toString();
      this.lastName = lastName.toString();
  }
}
