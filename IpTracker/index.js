const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const https = require('https');
const cors = require('cors');
app = express();

app.use( cors() );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {extended: false} ) );
app.use( express.static( path.join(__dirname,'./src/public/html') ) );

app.set( 'index' , './index.html' );

app.get( '/' , async(req,res) => {
  return res.render(index);
});
app.listen(8000);


