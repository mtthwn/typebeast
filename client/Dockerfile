FROM node:10.16.2-jessie

# App directory
WORKDIR /app 

# install dependencies
COPY package*.json ./
RUN npm install -g nodemon
RUN npm install

COPY . .

EXPOSE 3000
 CMD ["npm", "start"]