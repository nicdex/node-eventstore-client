const client = require('../lib/dist');
const userCredentials = new client.UserCredentials('admin', 'changeit');

const log = new client.NoopLogger();
const httpEndpoint = `https://${process.env.EVENTSTORE_HOST || "localhost"}:2113`;
const operationTimeout = 5000;

const simpleProjection = "\
fromStream('$stats-127.0.0.1:2113')\
  .when({\
    $init: function(){\
      return {\
        count: 0\
      }\
    },\
    $any: function(s,e){\
      s.count += 1;\
    }\
  })\
";

module.exports = {
  setUp: function(cb) {
    this.projectionsManager = new client.ProjectionsManager(log, httpEndpoint, operationTimeout, false);
    cb();
  },
  'Create One Time Projection Happy Path': function(test) {
    test.expect(1);

    this.projectionsManager.createOneTime(simpleProjection, userCredentials)
      .then(function (result) {
        test.equal(result, undefined);
        test.done();
      })
      .catch(test.done);
  },
  'List All Happy Path': function(test) {
    test.expect(1);
    this.projectionsManager.listAll(userCredentials)
      .then(function (projections) {
        test.ok(projections.length > 0, "no projections");
        test.done();
      })
      .catch(test.done);
  }
  //TODO: other tests
};
