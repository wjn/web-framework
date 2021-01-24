// quick reminder about Accessors prefixing functions with "get" or "set"
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('Will', 'Nielsen III');
console.log(person.fullName);
