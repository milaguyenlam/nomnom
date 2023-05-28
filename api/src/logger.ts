import pino from 'pino';
import { appConfig } from './config';

const logger = pino({
  name: appConfig.APP_ID,
  level: appConfig.LOG_LEVEL,
});

export default logger;
