FROM node:10.16-jessie

WORKDIR /app

COPY package*.json ./
RUN npm install -g nodemon
RUN npm install

COPY . .

EXPOSE 8080
  CMD ["npm", "start"]
