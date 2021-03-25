FROM node:14.16.0
WORKDIR /usr/app
COPY . .
RUN npm install
RUN npm run build
CMD [ "node", "./dist/index.js"]
