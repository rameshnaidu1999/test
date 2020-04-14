const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

// Init Express app
const app = express();

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');


// Routes
app.use('/', require('./routes'));

const port = 3001;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

//Run app, then load http://localhost:port in a browser to see the output.

// <!-- <% for(var i=0; i < rows.length; i++) { %>
//     <tr>
//       <td><%= rows[i].id %></td>
//       <td><%= rows[i].user %></td>
//       <td><%= rows[i].PASS %></td>
//     </tr>
//  <% } %> -->
// items[i].image, items[i].title,  items[i].info 