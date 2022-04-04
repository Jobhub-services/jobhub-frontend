FROM node:14.15.4-alpine
ARG port
USER root
COPY . /staak-app
WORKDIR /staak-app

ENV PORT=$port
RUN npm install
RUN npm install -g serve
RUN npm run build:prod

EXPOSE $PORT

CMD serve dist -p $PORT