const chai = require('chai');

describe('User model', () => {
  describe('Email', () => {
    it('should be present', (done) => {
      chai.expect(User.attributes).to.contain.key('email');
      done();
    });
    it('should contain key type as string', (done) => {
      chai.expect(User.attributes.email).to.include({type: 'string'});
      done();
    });
    it('should be required', (done) => {
      chai.expect(User.attributes.email).to.include({required: true});
      done();
    });
    it('must accept a valid email address', (done) => {
      chai.expect(User.attributes.email.validations).to.include({isEmail: true});
      done();
    });
    it('must be unique', (done) => {
      chai.expect(User.attributes.email.autoMigrations).to.include({unique: true});
      done();
    });
  });

  describe('Password ', () => {
    it('should be present', (done) => {
      chai.expect(User.attributes).to.contain.key('password');
      done();
    });
    it('password should contain key type as string', (done) => {
      chai.expect(User.attributes.password).to.include({type: 'string'});
      done();
    });
    it('password should be required', (done) => {
      chai.expect(User.attributes.password).to.include({required: true});
      done();
    });
  });

  describe('First name', () => {
    it('should be present', (done) => {
      chai.expect(User.attributes).to.contain.key('firstName');
      done();
    });
    it('should contain key type as string', (done) => {
      chai.expect(User.attributes.firstName).to.include({type: 'string'});
      done();
    });
    it('should be required', (done) => {
      chai.expect(User.attributes.firstName).to.include({required: true});
      done();
    });
  });

  describe('Last name attributes', () => {
    it('should be present', (done) => {
      chai.expect(User.attributes).to.contain.key('lastName');
      done();
    });
    it('should contain key type as string', (done) => {
      chai.expect(User.attributes.lastName).to.include({type: 'string'});
      done();
    });
    it('should be required', (done) => {
      chai.expect(User.attributes.lastName).to.include({required: true});
      done();
    });
  });

  describe('Role', () => {
    it('role should be present', (done) => {
      chai.expect(User.attributes).to.contain.key('role');
      done();
    });
  });
});
