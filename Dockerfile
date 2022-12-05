FROM node:14.16.0-alpine3.13
WORKDIR /react-app
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build

EXPOSE 3000
CMD [ "node", "index.js" ]