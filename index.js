const http = require('http');
const express = require('express')
const app = express();
const axios = require('axios');
//const products = require('./data.js');
const categories = require('./model/categories.js');
const users = require('./model/user.js');
//const server = http.createServer((request, response)=>{
//    response.end('Hello World')
//})
app.use(express.static('public'))
app.use(express.json()) 
app.use(express.urlencoded({ extended: true}) );
app.set('view engine', 'ejs');


app.get('/', async (request, response) => {
    const res = await axios.get("http://localhost:3000/products")
    console.log(res.data)
    response.render('pages/index',{
        products: res.data, 
        categories: categories
    });
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

//profil management
app.get('/profil', (request, response) => {
    response.render('pages/profil')
})

app.get('/user', async (request, response) => {
    const res = await axios.get("http://localhost:3000/users")
    response.render('pages/user', {
        user: res.data[0]
    });
})


//add plant to user
app.post('/user',async (request, response) => {
    const res = await axios.get('http://localhost:3000/users/1')
    user = res.data;
    newPlant= request.body;
    axios.patch('http://localhost:3000/users/1', {
        plants: [...user.plants, newPlant],
  })
  response.render('pages/user', {
        user: user
    });
})


app.put('/updateproduct/:id', (request, result) => {
    const id = Number(req.params.id)
    const index = products.findIndex(product => product.id === id)
    if (index === -1) {
        return result.status(404).send('Product not found')
    }
    const updatedProduct = {
        id: products[index].id,
        name: request.body.name,
        price: request.body.price
    }
    products[index] = updatedProduct
    result.status(200).json('Product updated')
})

app.get('/liked', (request, response) => {
    response.render('pages/liked')
})

app.get('/products', async (request, response) => {
    const res = await axios.get("http://localhost:3000/products")
    response.render('pages/products',{
        products: res.data
    });
    //response.json(products)
})

app.get('/product/:id', async (request, response) => {
    const id = Number(request.params.id)
    const res = await axios.get("http://localhost:3000/products")
    const products = res.data
    const product = products.find(product => product.id == id)
    
    if (!product) {
        return response.status(404).send('Product not found')
    }
    return response.render('pages/product', {
        product: product
    });
})

app.get('/cart', (request, response) => {
    response.render('pages/cart')
})


app.listen('3001', 'localhost', () => {
    console.log('server start');
});
