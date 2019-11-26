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
app.use(express.static(path.resolve(__dirname, '../polaris')));

// need to add middleware, userControl function
app.post('/userlogin', (req, res) => {
  console.log('user logged-in');
  res.status(200).send('inside server login');
});

//error out if nothing is working
app.use('*', (req, res, next) => {
  console.log(`couldn't find anything`);
  res.status(404).send(`<h1>Page Doesn't Exist</h1>`);
});

//start running the server on the secure port from the .env file
app.listen(port, () => {
  console.log(`server listening on Port ${port}`);
});
