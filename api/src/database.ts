import mongoose from 'mongoose';
import logger from './logger';
import { appConfig } from './config';

export async function connectToMongoDB(): Promise<void> {
  await mongoose.connect(appConfig.ATLAS_URI, {
    autoIndex: false,
    autoCreate: true,
  });
  logger.info(`Succesfully connected to MongoDB: ${appConfig.ATLAS_URI}`);
}
