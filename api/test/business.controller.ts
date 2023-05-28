import 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import { app } from '../src/app';

describe('Examples', () => {
  it('should get all examples', () =>
    request(app)
      .get('/api/v1/business')
      .expect('Content-Type', /json/)
      .then((r) => {
        expect(r.body).to.be.an('array').of.length(2);
      }));

  it('should add a new example', () =>
    request(app)
      .post('/api/v1/business')
      .send({ name: 'test' })
      .expect('Content-Type', /json/)
      .then((r) => {
        expect(r.body)
          .to.be.an('object')
          .that.has.property('name')
          .equal('test');
      }));

  it('should get an example by id', () =>
    request(app)
      .get('/api/v1/business/2')
      .expect('Content-Type', /json/)
      .then((r) => {
        expect(r.body)
          .to.be.an('object')
          .that.has.property('name')
          .equal('test');
      }));
});
