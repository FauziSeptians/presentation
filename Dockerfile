FROM node:18-alpine

WORKDIR /app

ARG ENV_FILE=.env.local
ENV ENV_FILE=$ENV_FILE
COPY $ENV_FILE .env

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
