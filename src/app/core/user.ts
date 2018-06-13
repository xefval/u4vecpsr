class User {
  id: number;
  firstName: string;
  lastName: string;

  constructor(id:any, firstName:any, lastName:any) {
      this.id = parseInt(id);
      this.firstName = firstName.toString();
      this.lastName = lastName.toString();
  }
}