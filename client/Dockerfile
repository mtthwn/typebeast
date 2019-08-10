FROM node:10.14

# App directory
WORKDIR /usr/src/app 

# install dependencies
COPY package*.json ./
RUN npm install -g nodemon
RUN npm install

COPY . .

EXPOSE 3000
 CMD ["npm", "start"]