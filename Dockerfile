FROM node:12-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --production

COPY . ./

RUN npm run build

CMD ["npm", "run", "start:production"]
