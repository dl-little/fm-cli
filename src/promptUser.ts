import chalk from 'chalk';
import { input, confirm, number, select } from '@inquirer/prompts';
import { getConfig, hasConfig, setConfig, resetConfig } from './config.js';
import { validateUri } from './validation.js';

const promptUser = async () => {
  let uri: string;
  let useConfig = false;

  if (hasConfig('uri')) {
    useConfig = await confirm({
      message: `${chalk.yellow('Use this URI:')} ${chalk.green(
        getConfig('uri')
      )}?`,
    });
  }

  if (!useConfig) {
    uri = await input({
      message: chalk.yellow('Enter Your Atlas URI:'),
    });

    try {
      uri = validateUri(uri);
      setConfig('uri', uri);
    } catch (err: any) {
      console.log(err.message);
      resetConfig();
      return promptUser();
    }
  } else {
    uri = getConfig('uri') as string;
  }

  const answers = {
    database: await input({
      message: chalk.yellow('Enter the database name:'),
    }),
    collection: await input({
      message: chalk.yellow('Enter the collection name:'),
    }),
    amount: (await number({
      message: chalk.yellow('Enter the amount of documents:'),
    })) as number,
    type: await select({
      message: chalk.yellow('Select the type of faker object to create:'),
      choices: [
        {
          name: 'Employee',
          value: 'employee',
        },
        {
          name: 'Product',
          value: 'product',
        },
        {
          name: 'Credit Card',
          value: 'credit_card',
        },
        {
          name: 'Bank Account',
          value: 'bank_account',
        },
        {
          name: 'User',
          value: 'user',
        },
      ],
    }),
  };

  if (Object.values(answers).includes('') || answers.amount === undefined) {
    console.log('Missing required options.');
    return promptUser();
  }

  return {
    uri: uri,
    ...answers,
  };
};

export default promptUser;
