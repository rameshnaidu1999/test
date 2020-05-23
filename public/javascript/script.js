const express = require('express');
const con = require('../../config');

const path = require('path');

const bodyParser = require('body-parser');

// Init Express app
const app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  })
);

function Add_to_Cart(){
  var ajax = new XMLHttpRequest();
  ajax.open('POST','ajax.php',true);
  ajax.send();
}
