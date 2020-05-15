const next = require('next');
const routes = require('./routes');
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

const port = process.env.PORT || 3000;

const express = require('express');
app.prepare().then(() => {
  express().use(handler).listen(port);
});
