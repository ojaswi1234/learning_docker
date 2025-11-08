#Build stage 

FROM node:22-alpine as build

WORKDIR /client

COPY package*.json ./

RUN npm install

COPY . .


RUN npm run build

#Production stage
FROM  node:22-alpine
WORKDIR /client

RUN npm install -g serve
ENV PATH="/usr/local/bin:$PATH"
COPY --from=build /client/dist ./dist

EXPOSE 3000

CMD [ "serve", "-s", "dist", "-l", "3000" ]