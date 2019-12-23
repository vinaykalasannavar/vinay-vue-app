# vinay's simple vue-app built using the vew CLI.

## Project setup
Run this command to install the required node packages.
```
npm install
```

### Compiles and hot-reloads for development
To run the app in development mode, use the command

```
npm run serve
```

This will fire the app in debug mode possibly at default port 8080:

  App running at:
  - Local:   http://localhost:8080/

### Compiles and minifies for production

To build/ship the app, run this command:

```
npm run build
```

Have a look at the /dist folder in your app, where this command will build and produce the production app.
Production code means:
- Compiled application and compressed
- Compressed: also called minified/uglified code; Usually with an intention to prevent/make it atleast harder for people to reverse engineering your application code.

### Lints and fixes files
Will provide you suggestions to avoid potential errors, checking you code at compile time and provide improvements.

Coz remember, JavaScript is too shy to tell you your code is a load of bollocks... It will try to run it and produce some result anyway, making your debug life more fun :)

```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
