FROM node:10-alpine as node
WORKDIR /app
COPY . .
RUN npm install && npm run build --prod

FROM nginx:1.14.1-alpine
COPY --from=node /app/dist/user-portal /usr/share/nginx/html
COPY --from=node /app/nginx.conf /etc/nginx/conf.d/default.conf