FROM node:14.15.0-alpine3.10

USER 2000
RUN mkdir -p /home/node/app/node_modules && chown -R 2000:2000 /home/node/app

WORKDIR /home/node/app
COPY --chown=2000:2000 . /home/node/app
RUN yarn install
RUN yarn build

EXPOSE 3000

ENTRYPOINT ["node"]
CMD ["/home/node/app/dist/main.js"]