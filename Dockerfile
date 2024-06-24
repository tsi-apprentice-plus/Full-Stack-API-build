FROM node:22
WORKDIR /src/app
COPY package.json .
RUN npm install
COPY . .
ENV PORT=3000
EXPOSE 3000
# CMD ["npm", "run", "dev"]
CMD ["npm","start"]
