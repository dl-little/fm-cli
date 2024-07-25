import { InvalidArgumentError } from 'commander';
import { setConfig } from './config.js';

export const validateInt = (value: any) => {
  const parsedInt = parseInt(value, 10);

  if (isNaN(parsedInt)) {
    throw new InvalidArgumentError('Amount must be a number.');
  }

  return parsedInt;
};

export const validateUri = (value: any) => {
  const parsedValue = String(value);

  if (
    !parsedValue.startsWith('mongodb://') &&
    !parsedValue.startsWith('mongodb+srv://')
  ) {
    throw new InvalidArgumentError('Enter a valid URI');
  }

  setConfig('uri', parsedValue);
  return parsedValue;
};

export const validateType = (value: any) => {
  const parsedValue = String(value);
  const options = [
    'employee',
    'product',
    'credit_card',
    'bank_account',
    'user',
  ];

  if (!options.includes(parsedValue)) {
    throw new InvalidArgumentError(
      "Type must be of one of these types: 'employee', 'product', 'credit_card', 'bank_account', 'user'"
    );
  }

  return parsedValue;
};

export const validateAnswers = (answers: object) => {
  const entries = Object.entries(answers);

  if (entries.length !== 5) {
    return {
      valid: false,
      message: 'Missing required options.',
    };
  }

  const keysWithEmptyValues: string[] = [];
  entries.forEach(([k, v]) => {
    if (v === '' || v === undefined) {
      keysWithEmptyValues.push(k);
    }
  });

  if (!!keysWithEmptyValues.length) {
    return {
      valid: false,
      message: `The following options have empty values: ${keysWithEmptyValues.toString()}`,
    };
  }

  return {
    valid: true,
    message: '',
  };
};
