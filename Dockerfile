FROM node:6.3.0

RUN mkdir -p /root/app

WORKDIR /root/app
COPY package.json /root/app

RUN npm install
EXPOSE 8080

CMD /bin/bash
