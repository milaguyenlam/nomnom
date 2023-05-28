import dotenv from 'dotenv';

dotenv.config();

class AppConfig {
  APP_ID = process.env.APP_ID || 'app';
  PORT = parseInt(process.env.PORT || '3000');
  LOG_LEVEL = process.env.LOG_LEVEL || 'debug';
  ATLAS_URI = process.env.ATLAS_URI || 'blabla';
}

export const appConfig = new AppConfig();
