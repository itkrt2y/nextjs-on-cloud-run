###
# Build stage
###
FROM node:12-alpine AS builder
WORKDIR /build

COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

COPY . .
RUN yarn build && rm -rf .next/cache

###
# Exec Stage
###
FROM node:12-alpine
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile --production

COPY --from=builder /build/.next .next
RUN mkdir pages

CMD ["yarn", "start:production"]
