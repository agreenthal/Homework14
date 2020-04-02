const express = require("express");
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 7070;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(require('./routes'))

app.listen(PORT, ()=>console.log('server is listening on port '+PORT))