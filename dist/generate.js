import { EMPLOYEE, PRODUCT, BANK_ACCOUNT, CREDIT_CARD, USER, } from './fakerClasses.js';
class GENERATOR {
    constructor(numberOfDocs) {
        this.numberOfDocs = numberOfDocs;
    }
    execute(key) {
        let data = [];
        for (let i = 0; i < this.numberOfDocs; i++) {
            data.push(this[key]());
        }
        return data;
    }
    employee() {
        return Object.assign({}, new EMPLOYEE());
    }
    product() {
        return Object.assign({}, new PRODUCT());
    }
    credit_card() {
        return Object.assign({}, new CREDIT_CARD());
    }
    bank_account() {
        return Object.assign({}, new BANK_ACCOUNT());
    }
    user() {
        return Object.assign({}, new USER());
    }
}
const generate = (numberOfDocs, type) => {
    const generator = new GENERATOR(numberOfDocs);
    return generator.execute(type);
};
export default generate;
//# sourceMappingURL=generate.js.map