// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const message = process.env.MESSAGE || 'Hello from Kubernetes!';
  res.send(`<h1>${message}</h1><p>Running on ${process.env.HOSTNAME || 'unknown host'}</p>`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});