
const express = require('express');
const app = express();
const https = require('https');

const bodyParser = require('body-parser');
//const sequelado = require('sequelize');
const login = require('mongodb').MongoClient;
//const Post = require('./public/javascript/Posts.js');
require('dotenv').config();
const path = require('path');
const model = require('./public/javascript/model/usuario');
const Usuario = model.Usuario;

  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));
app.set('index','./index.html');



app.get('/',(req,res) => {
  return res.render(index);
})
app.post('/ola',async (req,res) => {
  if(req.body.fname != '' && req.body.lname != '' && req.body.emailadd != '' && req.body.secret != ''){
    new_user = new Usuario(req.body.fname+req.body.lname,req.body.email,req.body.secret);
    const data = JSON.stringify(new_user);
    
    const options = {
      hostname: 'signup137.herokuapp.com',
      port: 443,
      path: '/users',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    }
    const requi = https.request(options, res => {
      console.log(`statusCode: ${res.statusCode}`);

    })

    requi.write(data);
    requi.end();
    return res.redirect('sent.html');
    /*Post.create({
    nome: req.body.fname + req.body.lname,
    email: req.body.emailadd,
    senha: req.body.secret
  }).then((val)=>{
 
    console.log("Signed")
    res.redirect('./sent.html');
  },(error)=>{
    console.log(error)
  })
  }else{
    res.get('/')
    console.log("NAOO");
  }*/
  } 
});

app.listen(process.env.PORT || 8000);
console.log('Listening...');