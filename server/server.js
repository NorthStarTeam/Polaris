const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

//serve the bundle.js as a static file first
app.use(
  '/polaris',
  express.static(path.resolve(__dirname, '../polaris')),
  (req, res, next) => {
    console.log('served static bundle', path.resolve(__dirname, '../polaris'));
    // next();
  }
);

//error out if nothing is working
app.use('*', (req, res, next) => {
  console.log(`couldn't find anything`);
  res.status(404).send(`<h1>Page Doesn't Exist</h1>`);
});

//start running the server on the secure port from the .env file
app.listen(port, () => {
  console.log(`server listening on Port ${port}`);
});
