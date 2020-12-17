const client = require('../src/client'); // RWM: Import from npm installed package rather than from src
//const client = require("node-eventstore-client");

const resolveLinkTos = true;

function resumeEvent(event) {
  return [
    event.originalEvent.eventType,
    [event.originalEventNumber.toNumber(), event.originalStreamId].join('@'),
    event.originalPosition
  ].join(" ")
}

const eventAppeared = (subscription, event) => console.log("Event received", resumeEvent(event));

const subscriptionDropped = (subscription, reason, error) => console.log("Subscription dropped", reason, error);

const liveProcessingStarted = () => console.log("Live processing started.");

const credentials = new client.UserCredentials("admin", "changeit");

const settings = {
    maxReconnections: 10,
    reconnectionDelay: 1000, // RWM: slow down the reconnection attempts. 10 seconds to restore connection.
};
if (process.env.ENABLE_LOGGING) settings.log = console;
if (process.env.VERBOSE) settings.verboseLogging = true;
const endpoint = "tcp://localhost:1113";
const connection = client.createConnection(settings, endpoint);

connection.connect().catch(err => console.log("Connection failed", err));

connection.on('heartbeatInfo', heartbeatInfo =>
  console.log('Heartbeat latency', heartbeatInfo.responseReceivedAt - heartbeatInfo.requestSentAt, 'ms')
);

connection.once("connected", tcpEndPoint => {
  console.log(`Connected to eventstore at ${tcpEndPoint.host}:${tcpEndPoint.port}`);
  // RWM: subscribe Stream instead of All
  connection.subscribeToStreamFrom(
    "test", // RWM: Stream to subscribe to
    null,
    resolveLinkTos,
    eventAppeared,
    liveProcessingStarted,
    subscriptionDropped,
    credentials
  );
});

connection.on("error", error =>
  console.log(`Error occurred on connection: ${error}`)
)

connection.on("closed", reason =>
  console.log(`Connection closed, reason: ${reason}`)
)

// RWM: Handle the reconnecting event, for better awareness of what's happening
connection.on("reconnecting", msg =>
  console.log(`Reconnecting, msg: ${JSON.stringify(msg, null, 4)}`)
)
