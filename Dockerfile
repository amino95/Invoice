# base image
FROM node:10.12.0

#isntall chrome for protractor test
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN printf "deb http://archive.debian.org/debian/ jessie main\ndeb-src http://archive.debian.org/debian/ jessie main\ndeb http://security.debian.org jessie/updates main\ndeb-src http://security.debian.org jessie/updates main" > /etc/apt/sources.list
RUN apt-get update && apt-get install -yq google-chrome-stable


# set working directory 
WORKDIR /app

#add /app/node_modules/.bin to $PATH
ENV PATH /app/nodes_modules/.bin:$PATH

#install and cache app dependencies 
COPY package.json /app/package.json
RUN npm install 
RUN npm install -g @angular/cli@7.1.4 --unsafe

#add app
CMD ng serve --host 0.0.0.0