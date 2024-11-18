#!/usr/bin/env bash

rm -rf certs/{ca,node1,node2,node3}
# ca
docker run --user $UID -v /home/nicolas/dev/node-eventstore-client/certs:/data --rm eventstore/es-gencert-cli create-ca -out /data/ca --days 3650
# node1
docker run --user $UID -v /home/nicolas/dev/node-eventstore-client/certs:/data --rm eventstore/es-gencert-cli create-node -ca-certificate /data/ca/ca.crt -ca-key /data/ca/ca.key -ip-addresses 192.168.33.10 -dns-names cluster.tests.node-eventstore-client.local,node1.tests.node-eventstore-client.local -out /data/node1 -days 3650
# node2
docker run --user $UID -v /home/nicolas/dev/node-eventstore-client/certs:/data --rm eventstore/es-gencert-cli create-node -ca-certificate /data/ca/ca.crt -ca-key /data/ca/ca.key -ip-addresses 192.168.33.11 -dns-names cluster.tests.node-eventstore-client.local,node2.tests.node-eventstore-client.local -out /data/node2 -days 3650
# node3
docker run --user $UID -v /home/nicolas/dev/node-eventstore-client/certs:/data --rm eventstore/es-gencert-cli create-node -ca-certificate /data/ca/ca.crt -ca-key /data/ca/ca.key -ip-addresses 192.168.33.12 -dns-names cluster.tests.node-eventstore-client.local,node3.tests.node-eventstore-client.local -out /data/node3 -days 3650
