import * as Promise from 'bluebird'; // eslint-disable-line no-unused-vars
import app from './middlewares/express';
import config from './config/vars';
import logger from './middlewares/logger';

// Start Express server
app.listen(config.port, () => {
  logger.info(`Server started on port ${config.port} (${config.env})`);
});

export default app;
