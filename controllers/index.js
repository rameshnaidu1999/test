const express = require('express');
const con = require('../../config');

const bodyParser = require('body-parser');

// Init Express app
const app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  })
);

function cart_btn() {
  console.log('Clicked');
}
