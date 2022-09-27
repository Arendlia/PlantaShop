const http = require('http');
const express = require('express')
const app = express();
//const server = http.createServer((request, response)=>{
//    response.end('Hello World')
//})

app.use(express.static('public'))

app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.render('pages/index')
})

app.get('/login', (request, response) => {
    response.render('pages/login')
})

app.get('/register', (request, response) => {
    response.render('pages/register')
})

app.get('/forgotpassword', (request, response) => {
    response.render('pages/forgotpaswd')
})

app.get('/profil', (request, response) => {
    response.render('pages/profil')
})

app.get('/user', (request, response) => {
    response.render('pages/user')
})

app.get('/liked', (request, response) => {
    response.render('pages/liked')
})

app.get('/products', (request, response) => {
    response.render('pages/products')
})

app.get('/product/:id', (request, response) => {
    response.render('pages/product')
})

app.get('/cart', (request, response) => {
    response.render('pages/cart')
})


app.listen('3000', 'localhost', () => {
    console.log('server start');
});
