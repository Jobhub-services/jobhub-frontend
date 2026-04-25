FROM node:14.15.4-alpine
ARG port
USER root
COPY . /staak-app
WORKDIR /staak-app

ENV PORT=$port
RUN npm install
RUN npm run build:prod

EXPOSE $PORT

CMD export APP_PORT=$PORT && npm run heroku:serve