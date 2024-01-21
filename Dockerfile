FROM node:20.5.1-bookworm-slim AS build
WORKDIR /app
COPY ./package.json ./package-lock.json ./


RUN npm install
COPY . ./


RUN npm run build


#FROM nginx:alpine
#COPY --from=build /app/dist /usr/share/nginx/html
#COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["npm", "run", "start"]

#FROM node
#WORKDIR /app
#COPY ./package.json ./package-lock.json ./
#RUN npm i
#COPY . ./

#EXPOSE 3000
#CMD ["npm", "run", "start"]