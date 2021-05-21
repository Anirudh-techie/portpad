var express = require("express");
var app = express();
var firebase = require('firebase-admin');
var auth = require('./controllers/auth');
var notes = require("./controllers/notes")
var serviceAccount = require("./admin.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount)
});

app.use(express.json());
app.use((req,res,next)=>{
  console.log('request: '+req.url+" body:",req.body," status: "+req.statusCode);
  next();
})
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});
app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/public/register.html");
});

app.post("/newNote",notes.new);
app.post("/saveNote",notes.set );
app.post("/getdata",notes.get);


app.use(express.static('public'));
app.post('/adduser',auth.adduser);

app.listen(40000,()=>{
   console.log("Listening server at port 40000: http://localhost:40000")
})
