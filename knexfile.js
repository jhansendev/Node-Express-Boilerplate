import path from 'path';
import config from './src/config/vars';

// Pull out config options from config file
// const [url, poolMin, poolMax, timeout, env] = config;
const url = config.url;
const poolMin = config.poolMin;
const poolMax = config.poolMax;
const timeout = config.timeout;
const env = config.env;

// Set migration options
const migrations = {
  tableName: 'knex_migrations',
  directory: path.join(__dirname, './src/db/migrations')
};

// Set seed options
const seeds = {
  directory: path.join(__dirname, './src/db/seeds')
};

// Export custom object based on enviroment
exports[env] = {
  client: 'pg',
  connection: url,
  pool: {
    min: poolMin,
    max: poolMax
  },
  acquireConnectionTimeout: timeout,
  migrations,
  seeds
};
