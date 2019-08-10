FROM node:10.16

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install -g nodemon
RUN npm install

COPY . .
RUN npm install bcrypt

EXPOSE 8080 8081
  CMD ["npm", "run", "dev"]