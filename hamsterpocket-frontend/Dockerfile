FROM node:18-slim

ARG NODE_ENV=prod
ENV NODE_ENV ${NODE_ENV}
RUN echo ${NODE_ENV}

WORKDIR /opt/app
COPY . .
RUN rm -rf .next
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn install --frozen-lockfile
RUN yarn lint && yarn build

CMD ["node_modules/.bin/next", "start"]