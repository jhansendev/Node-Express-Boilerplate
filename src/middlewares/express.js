import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import logger from './logger';

const app = express();

// Parses incoming body params from requests and attaches them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Secure app by setting various HTTP headers
app.use(helmet());

// Enable Cross Origin Resource Sharing for certain domains
app.use(cors());

// HTTP request logging
app.use(morgan('combined', { stream: logger.stream }));

export default app;
