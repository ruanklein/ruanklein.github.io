FROM node:24-alpine

RUN apk update \
    && apk add --no-cache pnpm

WORKDIR /app
USER node

EXPOSE 5173