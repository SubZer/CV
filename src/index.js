const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
// const methodOverride = require('method-override');
const app = express();
const route = require('./routers/index');
const port = 3000;
const db = require('./config/db/index');

//connect db 
db.connect();

//hỗ trợ req.body 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router init
// truyền app vào f bên indexrouter

//trỏ đến file logo
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.urlencoded(
  {
    extended: true
  }
));
app.use(express.json());

// app.use(methodOverride('_method'));


app.use(morgan('combined'));

//template engine
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

//phai de router xuong cuoi de tranh bi loi
route(app); //-1-


app.listen(port, () => console.log(`example http://localhost:${port}`));
