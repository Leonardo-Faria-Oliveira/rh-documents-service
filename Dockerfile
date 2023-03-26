FROM node:18

WORKDIR /usr/src/api

COPY . .

COPY package*.json ./

RUN yarn --quiet --no-optional --no-fund --loglevel=error

RUN yarn build

EXPOSE 80

CMD ["npm run", "start:prod"]
