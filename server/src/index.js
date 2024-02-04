const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

const port = 8080;
app.listen(port, function() {
  console.log(`listening on ${port}`)
})