FROM node:22-alpine3.21

RUN apk update \
    && apk add --no-cache pnpm

WORKDIR /app
USER node

EXPOSE 5173