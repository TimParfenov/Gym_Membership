const express = require('express');
const app = express();
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const path = require('path');


app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
    res.render('Register1')
});

app.get('/register2', (req, res) => {
    res.render('Register2')
});

app.get('/Register3', (req, res) => {
    res.render('Register3')
});

app.get('/Register4', (req, res) => {
    res.render('Register4')
});

app.listen(3000, () => {
    console.log('Connected to 3000')
});