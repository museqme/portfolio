'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.get('/new', function(request, response) {
  response.sendFile('new.html', {root: './public'});
 });

app.post('/app', function(request, response) {
  client.query(
    `
      INSERT INTO
        articles(title, author, "authorUrl", category, "publishedOn", body)
      VALUES ($1, $2, $3, $4, $5, $6);
    `,
    [
      request.body.title,
      request.body.author,
      request.body.authorUrl,
      request.body.category,
      request.body.publishedOn,
      request.body.body
    ]
  )
  .then(function() {
    response.send('insert complete')
  })
  .catch(function(err) {
    console.error(err);
  });
});
