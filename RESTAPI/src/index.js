const express = require('express');
const app = express();
const morgan = require('morgan');

//settings 
app.set('port', process.env.PORT || 1000);
app.set('json spaces', 2);

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/api/music',require('./routes/music'));


//start server (http://localhost:1000)
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});