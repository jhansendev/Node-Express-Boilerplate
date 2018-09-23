// Import .env variables
require('dotenv-safe').config({
  allowEmptyValues: true
});

const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT
};

export default config;
