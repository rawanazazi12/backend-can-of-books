'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/bookss", { useNewUrlParser: true , useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);
const app = express();
app.use(cors());
const {getBooks, createBook, deleteBook, updateBook}=require('./controller/book.controller');

const {seedBooksCollection}=require('./models/bookModel');

// seedBooksCollection();

app.use(express.json());

app.get('/books',getBooks);

app.post('/book',createBook);
app.delete('/book/:book_id',deleteBook);
app.put('/book/:book_id', updateBook);


const PORT = process.env.PORT || 3001;
const JWKSURI=process.env.JWKSURI;

const client = jwksClient({
  jwksUri: JWKSURI
});


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
