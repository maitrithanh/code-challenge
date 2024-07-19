FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json .
RUN yarn 
COPY . .
CMD [ "yarn", "dev" ]
