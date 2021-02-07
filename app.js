
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const path = require('path');

const port = 3000;

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
  res.render('index', {content1: "tutu"});
});

app.post('/', function (req, res) {
  res.render('index');
}); 

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/service', (req, res) => {
  res.render('service');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/admin', (req, res) => {
  res.render('admin');
});

app.post('/admin', function (req, res) {
  textContent = String(req.body.txtGreetings);
  res.redirect('/');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', function (req, res) {
  var username = req.body.txtUsername;
  var password = req.body.txtPassword;
  if (username == "adminBos" && password == "adminPassword") {
    res.redirect("admin");
  } else {
    console.log("wrong password and answer");
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));