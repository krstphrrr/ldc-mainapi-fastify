###################
# BUILD FOR PRODUCTION
###################

FROM node:21.6-alpine As build

WORKDIR /usr/src/app

COPY --chown=node:node ./src .

RUN npm i 

# COPY --chown=node:node . .

CMD ["npm", "start"]
# CMD ["tail", "-f", "/dev/null"]
###################
# PRODUCTION
###################

# FROM node:19-alpine3.17 As production

# COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
# COPY --chown=node:node --from=build /usr/src/app/dist ./dist

# CMD [ "node", "dist/main.js" ]

