# Super Calculator

This is the best calculator - written in React (sorry for mixing ES5 and ES6)

## How to run

To use this in docker make sure to first build the image:

`docker build -t super-calculator .`

Then you may use it with the npm commands or simply `bash` into the container (default)

- Dev Server: `docker run -it -v /root/app/node_modules -v $(pwd):/root/app -p 8080:8080  super-calculator npm start`

- Tests: `docker run -it -v /root/app/node_modules -v $(pwd):/root/app -p 8080:8080  super-calculator npm run test`

- Bash: `docker run -it -v /root/app/node_modules -v $(pwd):/root/app -p 8080:8080  super-calculator /bin/bash`
