FROM node:18-alpine
WORKDIR /app
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint
ADD . .
RUN npm install
ENTRYPOINT ["/entrypoint.sh"]
CMD ["npm", "run", "dev"]