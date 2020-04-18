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

#install client modules
RUN rm -r /app/client/node_modules
RUN yarn install --production=true

#Compiles client files to JS
RUN yarn build --production=true

# serve image with just required build files
FROM node:12.8.1-alpine

EXPOSE 80

RUN mkdir /app

#install server modules
WORKDIR /app/server
COPY --from=builder ./app/server ./

#install client modules
WORKDIR /app/client
COPY --from=builder ./app/client/build /app/client/build
COPY --from=builder ./app/client/package.json /app/client
COPY --from=builder ./app/client/node_modules /app/client/node_modules


# Run the server
CMD node /app/server/src/index.js
