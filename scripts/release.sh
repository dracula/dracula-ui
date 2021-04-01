#!/bin/bash

yarn docs
NODE_ENV=production yarn build

cp package.json ./dist
cp -r dsp ./dist

npm publish ./dist