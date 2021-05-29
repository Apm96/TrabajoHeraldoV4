const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');


// var corsOptions = {​​
//   origin: "http://localhost:3000"
// }​​;

// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit:50000 }))
// parse requests of content-type - application/json
app.use(bodyParser.json({limit: "50mb"}))
app.use(cors());
// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});
// Require employee routes
const usersRoutes = require('./routes/users.routes')
const noticiaRoutes = require('./routes/noticia.routes')
// using as middleware
app.use('/api/v1/user', usersRoutes)
// using as middleware
app.use('/api/v1/noticia', noticiaRoutes)



// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});