import {
  EMPLOYEE,
  PRODUCT,
  BANK_ACCOUNT,
  CREDIT_CARD,
  USER,
} from './fakerClasses.js';

type key = 'employee' | 'product' | 'credit_card' | 'bank_account' | 'user';

class GENERATOR {
  numberOfDocs: number;
  constructor(numberOfDocs: number) {
    this.numberOfDocs = numberOfDocs;
  }

  execute(key: key) {
    let data = [];
    for (let i = 0; i < this.numberOfDocs; i++) {
      data.push(this[key]());
    }
    return data;
  }

  employee() {
    return { ...new EMPLOYEE() };
  }

  product() {
    return { ...new PRODUCT() };
  }

  credit_card() {
    return { ...new CREDIT_CARD() };
  }

  bank_account() {
    return { ...new BANK_ACCOUNT() };
  }

  user() {
    return { ...new USER() };
  }
}

const generate = (numberOfDocs: number, type: key) => {
  const generator = new GENERATOR(numberOfDocs);
  return generator.execute(type);
};

export default generate;
