#!/usr/bin/env bash

echo "Building app..."
yarn build --base-href https://chrisxu.me/toronto-waste-lookup/

cd ./dist/toronto-waste-lookup
cp ./index.html ./404.html