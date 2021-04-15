#!/bin/bash

yarn version
yarn docs
NODE_ENV=production yarn build
npm publish ./dist