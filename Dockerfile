FROM node:17-alpine as builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build



# *.............................* #

FROM nginx

#copy (from builder phase metioned above) build folder to /usr/share/nginx/html
COPY --from=builder /app/build /usr/share/nginx/html
