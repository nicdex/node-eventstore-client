module.exports = {

  'Test Send Ping': function (test) {
    this.conn.ping()
      .then(function () {
        test.done();
      })
      .catch(function(err) {
        test.done(err)
      });
  }
};

require('./common/base_test').init(module.exports);

