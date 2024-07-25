import { faker } from '@faker-js/faker';

export class EMPLOYEE {
  name: string;
  position: string;
  descriptor: string;
  area: string;
  level: string;
  constructor() {
    this.name = faker.person.fullName();
    this.position = faker.person.jobTitle();
    this.descriptor = faker.person.jobDescriptor();
    this.area = faker.person.jobArea();
    this.level = faker.helpers.arrayElement(['intern', 'junior', 'senior']);
  }
}

export class PRODUCT {
  department: string;
  isbn: string;
  price: string;
  product: string;
  description: string;
  material: string;
  constructor() {
    this.department = faker.commerce.department();
    this.isbn = faker.commerce.isbn();
    this.price = faker.commerce.price({ max: 200, symbol: '$' });
    this.product = faker.commerce.productName();
    this.description = faker.commerce.productDescription();
    this.material = faker.commerce.productMaterial();
  }
}

export class USER {
  name: string;
  email: string;
  phoneNumber: string;
  city: string;
  state: string;
  country: string;
  address: string;
  secondaryAddress: string;
  fullAddress: string;
  constructor() {
    this.name = faker.person.fullName();
    this.email = faker.internet.email({ firstName: this.name });
    this.phoneNumber = faker.phone.number();
    this.city = faker.location.city();
    this.state = faker.location.state({ abbreviated: true });
    this.country = 'United States';
    this.address = faker.location.streetAddress();
    this.secondaryAddress = faker.location.secondaryAddress();
    this.fullAddress = `${this.address}, ${this.secondaryAddress}, ${
      this.city
    }, ${this.state} ${faker.location.zipCode()}`;
  }
}

export class BANK_ACCOUNT {
  accountName: string;
  accountNumber: string;
  accountBalance: string;
  accountPin: string;
  routingNumber: string;
  constructor() {
    this.accountName = faker.finance.accountName();
    this.accountNumber = faker.finance.accountNumber();
    this.accountBalance = faker.finance.amount({
      min: 5,
      max: 3000,
      dec: 2,
      symbol: '$',
      autoFormat: true,
    });
    this.accountPin = faker.finance.pin();
    this.routingNumber = faker.finance.routingNumber();
  }
}

export class CREDIT_CARD {
  creditCardNumber: string;
  creditCardCVV: string;
  creditCardIssuer: string;
  zip: string;
  constructor() {
    this.creditCardNumber = faker.finance.creditCardNumber();
    this.creditCardCVV = faker.finance.creditCardCVV();
    this.creditCardIssuer = faker.finance.creditCardIssuer();
    this.zip = faker.location.zipCode();
  }
}
