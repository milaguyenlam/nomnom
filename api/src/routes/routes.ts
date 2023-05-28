import express, { Router } from 'express';
import businessRouter from './business.controller';
import { apiSpecificationPath } from '../middlewares/openapi-validation.handler';
import path from 'path';

const rootPath = path.normalize(__dirname + '/../..');

const router = Router();
router.use('/api/v1/business', businessRouter);
router.use('/api/v1/spec', express.static(apiSpecificationPath));
router.use(express.static(`${rootPath}/public`));

export default router;
