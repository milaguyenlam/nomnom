import express, { Express } from 'express';

import errorHandler from './middlewares/error.handler';
import { openApiValidationHandler } from './middlewares/openapi-validation.handler';
import router from './routes/routes';
import { connectToMongoDB } from './database';
import logger from './logger';
import { appConfig } from './config';

async function createApp(): Promise<Express> {
  const app = express();

  app.use(openApiValidationHandler);
  app.use(errorHandler);

  app.use(router);
  await connectToMongoDB();

  return app;
}

createApp()
  .then((app) => app.listen(appConfig.PORT))
  .then(() =>
    logger.info(`Application is listening on port ${appConfig.PORT}`)
  );
