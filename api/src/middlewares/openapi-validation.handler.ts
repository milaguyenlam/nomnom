import * as OpenApiValidator from 'express-openapi-validator';
import path from 'path';

const apiSpecificationPath = path.join(__dirname, '../docs/api.yml');

const openApiValidationHandler = OpenApiValidator.middleware({
  apiSpec: apiSpecificationPath,
  validateResponses: true,
  ignorePaths: /.*\/spec(\/|$)/,
});

export { apiSpecificationPath, openApiValidationHandler };
