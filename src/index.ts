#! /usr/bin/env node

import { program } from 'commander';
import {
  validateInt,
  validateUri,
  validateType,
  validateAnswers,
} from './validation.js';
import promptUser from './promptUser.js';
import connect from './connect.js';
import generate from './generate.js';
import chalk from 'chalk';

program
  .version('1.0.0')
  .description('Seed MongoDB Atlas Cluster with synthetic data from Faker.JS')
  .option('-u, --uri <type>', 'Add your Atlas URI', validateUri)
  .option('-d, --database <type>', 'Add your database name')
  .option('-c, --collection <type>', 'Add collection name')
  .option('-a --amount <number>', 'Add amount of documents', validateInt)
  .option(
    '-t, --type <type>',
    'Select the type of faker object to create',
    validateType
  );

program.parse(process.argv);

let options = program.opts();

if (!Object.keys(options).length) {
  options = await promptUser();
}

// Ensure we have a full answers object.
const { valid, message } = validateAnswers(options);
if (!valid) {
  console.log(chalk.red(message));
  process.exit(9);
}

// Ensure that we can connect to Atlas URI.
const client = await connect(options.uri);

if (!client) {
  console.log(chalk.red('Error connecting to MongoDB.'));
  process.exit(1);
}

const data = generate(options.amount, options.type);
const collection = client.db(options.database).collection(options.collection);

try {
  await collection.insertMany(data);
  console.log(chalk.green('Database seeded with synthetic data!'));
} catch (err) {
  console.log(chalk.red(err));
}

client.close();
