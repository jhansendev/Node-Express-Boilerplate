// Import .env variables
require('dotenv-safe').config({
  allowEmptyValues: true
});

const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  url: process.env.DB_URL,
  poolMin: parseInt(process.env.DB_POOL_MIN),
  poolMax: parseInt(process.env.DB_POOL_MAX),
  timeout: process.env.DB_TIMEOUT
};

export default config;
