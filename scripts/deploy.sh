#!/bin/bash

# Variables
remoteVersion="*"
localVersion="file:../dist"
filePath="./website/package.json"

# Replace with remote version
sed -i '' -e "s|$localVersion|$remoteVersion|g" $filePath

# Deploy to production
vercel deploy website --prod

# Replace with local version
sed -i '' -e "s|$remoteVersion|$localVersion|g" $filePath