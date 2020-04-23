# build image with node
FROM node:12.8.1-alpine AS builder

# install yarn
RUN npm install -g yarn

RUN mkdir /app

#install server modules
WORKDIR /app/server
COPY ./server  /app/server
RUN yarn --production=true

#install client modules
WORKDIR /app/client
COPY ./client/package.json ./client/yarn.lock  /app/client/
RUN yarn install --production=false
#copy all the project
COPY ./client  /app/client
#run tests
RUN yarn docker-test
