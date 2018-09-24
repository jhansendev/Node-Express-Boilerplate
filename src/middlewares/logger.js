import { createLogger, format, transports, addColors } from 'winston';
import fs from 'fs';

const { combine, label, timestamp, colorize, printf } = format;
const logDir = './src/logs';

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Custom format
const myFormat = printf(
  info => `${info.label} ${info.timestamp} ${info.level}: ${info.message}`
);

// Custom log levels and colors
const logLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    sql: 4,
    debug: 5
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'blue',
    sql: 'blue',
    debug: 'gray'
  }
};
addColors(logLevels);

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss ' }),
    label({ label: '[APP-SERVER]' }),
    myFormat
  ),
  transports: [
    new transports.File({
      filename: `${logDir}/error.log`,
      level: 'error',
      maxFiles: 5,
      maxsize: 5242880
    }),
    new transports.File({
      filename: `${logDir}/combined.log`,
      maxFiles: 5,
      maxsize: 5242880
    }),
    new transports.Console({
      level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
      format: combine(
        colorize({ all: true }),
        printf(info => `${info.level}: ${info.message}`)
      )
    })
  ],
  exceptionHandlers: [
    new transports.File({ filename: `${logDir}/exceptions.log` })
  ]
});

// Substring method removes the newline added by morgan
logger.stream = {
  write(message, encoding) {
    logger.info(message.substring(0, message.lastIndexOf('\n')));
  }
};

export default logger;
