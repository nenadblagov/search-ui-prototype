FROM node:22-alpine

RUN apk add --no-cache bash

WORKDIR /app

COPY . .

RUN npm install --legacy-peer-deps

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
