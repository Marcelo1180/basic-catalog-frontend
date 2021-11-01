# INSTALL test zebrands frontend

Setup config settings, route of Backend API

```sh
axios.defaults.baseURL = 'http://localhost:8000'
```

## Installing in DEVELOPMENT MODE

Installing general and dev dependencies

```sh
npm install
```

Run dev mode

```sh
npm run serve
```

## Installing in PRODUCTION MODE

Requirements:

- Debian 10

Installing dependencies

```sh
chmod +x deploy.sh
```

Build project

```sh
./deploy.sh
```
