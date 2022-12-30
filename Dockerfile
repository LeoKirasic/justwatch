FROM node:14-alpine AS development

ENV NODE_ENV development

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" "]
