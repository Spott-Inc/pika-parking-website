FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /src

COPY package*.json ./
RUN npm install

COPY . .

RUN ls -al
RUN npm run build
RUN ls -al

EXPOSE 8080
CMD [ "http-server", "dist" ]