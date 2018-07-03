FROM node:8.11.3

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./burger-builder/package.json /usr/src/app
COPY ./burger-builder/yarn.lock /usr/src/app

RUN yarn install

EXPOSE 3000

CMD [ "yarn", "start" ]