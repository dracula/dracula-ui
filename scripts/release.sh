#!/bin/bash

yarn docs
yarn version
NODE_ENV=production yarn build
npm publish ./dist