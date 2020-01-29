FROM node

COPY ./src .
RUN yarn

EXPOSE 3000
CMD [ "node", "read.js" ]