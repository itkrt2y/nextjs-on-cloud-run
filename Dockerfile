FROM node:12-alpine
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build && yarn --production

CMD ["yarn", "start:production"]
