# FROM node:10.16

# WORKDIR /usr/src/app

# COPY package*.json ./
# RUN npm install -g nodemon
# RUN npm install 

# COPY . .

# EXPOSE 8080 
#   CMD ["npm", "start"]

FROM node:8.16.1

WORKDIR /app

COPY package*.json ./
RUN npm install 
COPY . .

EXPOSE 8081
  CMD ["npm", "start"]