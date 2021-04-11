#!/bin/bash

yarn docs
NODE_ENV=production yarn build

yarn version
npm publish ./dist