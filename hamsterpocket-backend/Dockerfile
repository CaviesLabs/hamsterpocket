FROM node:18.19.0-slim

ARG NODE_ENV=production
ENV NODE_ENV ${NODE_ENV}
WORKDIR /app

COPY . .

RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn global add @nestjs/cli@10.1.18
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn install --frozen-lockfile
RUN yarn build

