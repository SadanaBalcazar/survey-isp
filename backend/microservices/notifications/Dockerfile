# FROM node:16

# WORKDIR /app

# RUN echo "deb http://apt.postgresql.org/pub/repos/apt/ buster-pgdg main" > /etc/apt/sources.list.d/pgdg.list
# RUN wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -
# RUN apt-get update
# RUN apt-get install -y postgresql-client


# ENV POSTGRES_HOST=ms_users
# ENV POSTGRES_PORT=5432
# ENV POSTGRES_USER=ms_users
# ENV POSTGRES_PASSWORD=ms_users
# ENV POSTGRES_DB=ms_users
# COPY package*.json ./

# RUN npm install



# COPY . .

# CMD [ "npm", "run", "start:dev"  ]


FROM node:18-alpine

WORKDIR /surveyapp

COPY package*.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "start:prod" ]