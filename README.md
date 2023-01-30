# node-eventstore-client
A port of the EventStore .Net ClientAPI to Node.js

## Learning

If you want to learn more about EventSourcing/EventModeling, you can join one of the monthly virtual workshops offered by my employer Adaptech Group, see info at [https://adaptechgroup.com/#workshop](https://adaptechgroup.com/#workshop).

## Status

### Missing features:

- Set system settings

### Areas to improve

- Errors
  - Use codes or types to differentiate between errors
- Performance
  - Performance hasn't been tested yet
- Tests
  - Can always do with more tests

## Getting started

Install using `npm install node-eventstore-client`

Versions to install to match EventStore versions:

- 0.1.x for ES prior to 3.9.4
- 0.2.x for ES from 3.9.4 to 5.x
- 20.10.x for ES 20.10 LTS
- 21.10.x for ES 21.10 LTS
- 22.10.x for ES 22.10 LTS


### Dependencies

- Node.js >= 14
- Modules: [long](https://www.npmjs.org/package/long), [protobufjs](https://www.npmjs.org/package/protobufjs), [uuid](https://www.npmjs.org/package/uuid), [strict-event-emitter-types](https://www.npmjs.com/package/strict-event-emitter-types) (installed via `npm install`)

### Install and run an Eventstore on localhost

See https://eventstore.com

*Note: If you are using a version of EventStore prior to 3.9.4, you need to use version 0.1.x of this package `npm install node-eventstore-client@^0.1`.*  


### API Documentation

#### Offline

The offline documentation can be found in the module folder `./node_modules/node-eventstore-client/docs`.

#### Online

The online documentation can be found at [https://dev.nicdex.com/node-eventstore-client/docs/](https://dev.nicdex.com/node-eventstore-client/docs/)
  
### Example: Storing an event

Save to ```app.js:```

```javascript
var esClient = require('node-eventstore-client');
var uuid = require('uuid');

var streamName = "testStream";
/* 
  Connecting to a single node using "tcp://localhost:1113"
  - to connect to a cluster via dns discovery use "discover://my.host:2113"
  - to connect to a cluster via gossip seeds use 
  [
    new esClient.GossipSeed({host: '192.168.1.10', port: 2113}), 
    new esClient.GossipSeed({host: '192.168.1.11', port: 2113}), 
    new esClient.GossipSeed({host: '192.168.1.12', port: 2113})
  ]
*/
var connSettings = {};  // Use defaults
var esConnection = esClient.createConnection(connSettings, "tcp://localhost:1113");
esConnection.connect();
esConnection.once('connected', function (tcpEndPoint) {
    console.log('Connected to eventstore at ' + tcpEndPoint.host + ":" + tcpEndPoint.port);
});

var eventId = uuid.v4();
var eventData = {
    a : Math.random(), 
    b: uuid.v4()
};
var event = esClient.createJsonEventData(eventId, eventData, null, 'testEvent');
console.log("Appending...");
esConnection.appendToStream(streamName, esClient.expectedVersion.any, event)
    .then(function(result) {
        console.log("Stored event:", eventId);
        console.log("Look for it at: http://localhost:2113/web/index.html#/streams/testStream");
        esConnection.close();
    })
    .catch(function(err) {
        console.log(err);
    });
```

Run:

```json
npm install uuid
npm install node-eventstore-client
node app.js
```

### Example: Subscribing to events

```cd samples```

To subscribe to all events from now on (includes example of a filter which ignores events which we aren't interested in):

```node subscribe-all-events.js```

To catch up on all events ever and subscribe to all new ones from now on:

```node subscribe-catchup-all-events.js```

To generate a test event, open a separate console and run:

```node store-event.js```

## Running the tests

### Local testing

To run the tests it is recommended that you use an in-memory instance of the eventstore so you don't pollute your dev instance.

    EventStore.ClusterNode.exe --run-projections=all --memdb –certificate-file=yourcert.pfx
    or
    ./run-node.sh --run-projections=all --memdb –certificate-file=yourcert.p12

You can also use docker-compose :

```bash
# start the single node cluster
npm run compose:single:start
# if you want to wait for the cluster to be available
npm run compose:wait
# run the tests
npm run test
# to cleanup (stop containres, delete volumes)
npm run compose:single:stop
```

For SSL setup see:

https://eventstore.org/docs/server/setting_up_ssl/  
or  
https://eventstore.org/docs/server/setting_up_ssl_linux/

To execute the tests suites simply run

    npm test

### Isolated environment

To be able to run the tests for different connection types (tcp, gossip, cluster) docker-compose files are available to setup the environment and run the tests.

#### Prerequisites

* docker
* docker-compose

#### Run

To execute the tests suites for single node cluster (tcp connection) simply run

    npm run test:single

To execute the tests suites for multiple nodes cluster (gossip connection) simply run

    npm run test:gossip

To execute the tests suites for multiple nodes cluster (dns discovery connection) simply run

    npm run test:cluster

## Porting .Net Task to Node.js

Any async commands returns a [Promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise) object in replacement of .Net Task.  


## License

Ported code is released under the MIT license, see [LICENSE](https://github.com/nicdex/node-eventstore-client/blob/master/LICENSE). 
 
Original code is released under the EventStore license and can be found at https://github.com/eventstore/eventstore.
