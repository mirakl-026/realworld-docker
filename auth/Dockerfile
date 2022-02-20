FROM node:16.14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# EXPOSE 3000 - могло быть так...

# CMD ["node", "run test"] - ...но лучше управлять в docker-compose.yml