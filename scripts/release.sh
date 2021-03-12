#!/bin/bash

yarn docs
NODE_ENV=production yarn build

cp package.json ./dist
cp -r dsp ./dist

yarn gh-pages -d ./dist -b alpha