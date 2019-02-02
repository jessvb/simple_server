# simple_server
A simple web server to be run remotely. This framework will be used for the [MIT App Inventor LSTM server](http://appinventor-alexa.csail.mit.edu).

## running the server
To run the server:
```sh
node main.js
```

This server was developed based on [this fantastic tutorial](https://www.sitepoint.com/build-a-simple-web-server-with-node-js/).

## testing the server
In a web browser, go to `http://your-host-address:1234/?q=hello`. You should see the response, `{"thing":"hello?"}`. Note that if you are running this server on a local computer, your "host address" will be `localhost` (i.e., you can go to `http://localhost:1234/?q=hello` to see the response). Otherwise, your host address will be your host's IP address and/or associated domain name (e.g., you can go to `http://domainname.com:1234/?q=hello`).
