import knex from 'knex';
import path from 'path';

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true,
});

export default connection;

// const knex = require('knex');
// const configuration = require('../../knexfile');

// const config =
//   process.env.NODE_ENV === 'test'
//     ? configuration.test
//     : configuration.development;

// const database = knex(config);

// module.exports = database;
