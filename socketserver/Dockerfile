FROM node:10.16

WORKDIR /usr/src/app

RUN npm install -g nodemon
RUN npm install

COPY . .

EXPOSE 8080
  CMD ["npm", "start"]