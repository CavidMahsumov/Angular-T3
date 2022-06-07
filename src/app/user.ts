export class User {
  constructor(
    public name: string,
    public surname: string,
    public age: number,
    public hiredate: Date
  ) {
    this.name = name;
    this.age = age;
    this.hiredate = hiredate;
    this.surname = surname;
  }
}
