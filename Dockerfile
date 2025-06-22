# Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm cache clean --force && npm install --network-timeout 100000 --fetch-timeout 100000 --fetch-retry-maxtimeout 120000
COPY . .
EXPOSE 3000
CMD ["npm", "start"]