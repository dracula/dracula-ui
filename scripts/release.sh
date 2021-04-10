#!/bin/bash

yarn docs
NODE_ENV=production yarn build

yarn version
yarn build-website

git add .
git commit -m 'Release'

npm publish ./dist

git push