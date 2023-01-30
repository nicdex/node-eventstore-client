#!/usr/bin/env bash

set -e

if [[ -d /var/code/src ]]; then
  cp -R /var/code/{src,test,*.js,*.json} .
fi

npm i
npm run build
npm run test-debug
