const express = require('express');

const app = express();

const morgan = require('morgan');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

//  settings

app.set('port', process.env.PORT || 1000);
app.set('json spaces', 2);

//  middleware

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//  routes

app.use(require('./routes/index'));
app.use('/api/music', require('./routes/music'));

app.get('/', (req, res) => res.send('HOLAMUNDO'));

//  start server (http://localhost:1000)
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});

mongoose.connect('mongodb://localhost:27017',
  { useNewUrlParser: true },
  () => console.log('connected to DB'));
