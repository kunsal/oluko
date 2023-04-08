const sails = require('sails');
const supertest = require('supertest');

before(function(done) {
  this.timeout(5000);
  sails.lift({
    hooks: { grunt: false },
    log: { event: 'warn' },
    port: 1338
  }, (err, sails) =>  {
    if(err) {
      return done(err);
    }
    global.app = supertest(sails.hooks.http.app);
    return done();
  });
});

after((done) => {
  try {
    sails.lower(done);
  } catch (err) {
    return done(err);
  }
});
