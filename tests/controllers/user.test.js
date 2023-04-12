const chai = require('chai');
const supertest = require('supertest');

describe('User', () => {
  describe('Registration', () => {
    it ('should validate the presence of firstName', (done) => {
      supertest(sails.hooks.http.app)
      .post('/api/users').send({}).end((err, res) => {
        if (err) {
          return done(err);
        }
        chai.expect(res.status).to.eq(400);
        chai.expect(res.body.code).to.eq('E_MISSING_OR_INVALID_PARAMS');
        chai.expect(res.body.problems[0]).to.contain('"firstName" is required');
        done();
      });
    });

    it ('should validate the presence of lastName', (done) => {
      supertest(sails.hooks.http.app)
      .post('/api/users').send({firstName: 'John'}).end((err, res) => {
        if (err) {
          return done(err);
        }
        chai.expect(res.status).to.eq(400);
        chai.expect(res.body.code).to.eq('E_MISSING_OR_INVALID_PARAMS');
        chai.expect(res.body.problems[0]).to.contain('"lastName" is required');
        done();
      });
    });

    it ('should validate the presence of email', (done) => {
      supertest(sails.hooks.http.app)
      .post('/api/users').send({firstName: 'John', lastName: 'Doe'}).end((err, res) => {
        if (err) {
          return done(err);
        }
        chai.expect(res.status).to.eq(400);
        chai.expect(res.body.code).to.eq('E_MISSING_OR_INVALID_PARAMS');
        chai.expect(res.body.problems[0]).to.contain('"email" is required');
        done();
      });
    });

    it ('should validate that email is valid', (done) => {
      supertest(sails.hooks.http.app)
      .post('/api/users').send({firstName: 'John', lastName: 'Doe', email: 'johndow'}).end((err, res) => {
        if (err) {
          return done(err);
        }
        chai.expect(res.status).to.eq(400);
        chai.expect(res.body.code).to.eq('E_MISSING_OR_INVALID_PARAMS');
        chai.expect(res.body.problems[0]).to.contain('Invalid "email"');
        done();
      });
    });

    it ('should validate the presence of password', (done) => {
      supertest(sails.hooks.http.app)
      .post('/api/users').send({firstName: 'John', lastName: 'Doe', email: 'john@email.com'}).end((err, res) => {
        if (err) {
          return done(err);
        }
        chai.expect(res.status).to.eq(400);
        chai.expect(res.body.code).to.eq('E_MISSING_OR_INVALID_PARAMS');
        chai.expect(res.body.problems[0]).to.contain('"password" is required');
        done();
      });
    });

    it ('should validate that length of password is more than 5', (done) => {
      supertest(sails.hooks.http.app)
      .post('/api/users').send({firstName: 'John', lastName: 'Doe', email: 'john@email.com', password: 'admin'}).end((err, res) => {
        if (err) {
          return done(err);
        }
        chai.expect(res.status).to.eq(400);
        chai.expect(res.body.code).to.eq('E_MISSING_OR_INVALID_PARAMS');
        chai.expect(res.body.problems[0]).to.contain('Invalid "password"');
        done();
      });
    });

  });
});
