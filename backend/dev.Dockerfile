FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

COPY .bin ./.bin

EXPOSE 3005

CMD ["npm", "start"]