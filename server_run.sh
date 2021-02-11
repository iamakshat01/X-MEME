#!/bin/bash


cd server/
# Setup DB or any other environment variables you want to setup.
sudo systemctl enable mongod

npm install
npm start
