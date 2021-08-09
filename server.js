'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/books", { useNewUrlParser: true , useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);
const app = express();
const {getBooks}=require('./controller/book.controller');

const {seedUserCollection}=require('./models/user.model');

app.get('/books',getBooks);

app.use(cors());

const PORT = process.env.PORT || 3001;
const JWKSURI=process.env.JWKSURI;

const client = jwksClient({
  jwksUri: JWKSURI
});

//   // TODO: 
//   // STEP 1: get the jwt from the headers
//   // STEP 2. use the jsonwebtoken library to verify that it is a valid jwt
//   // jsonwebtoken dock - https://www.npmjs.com/package/jsonwebtoken
//   // STEP 3: to prove that everything is working correctly, send the opened jwt back to the front-end

function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    var signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

app.get('/test', (request, response) => {
  const token = request.headers.authorization.split(' ')[1];
  console.log(token);
  jwt.verify(token, getKey, {}, (error, user) => {
    if (error) {
      response.send('invalid token');
    }
    response.json(user);
  });
  response.send("HIIIII");
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
