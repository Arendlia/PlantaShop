const http = require('http');
const express = require('express')
const app = express();
const products = require('./data.js');
const categories = require('./model/categories.js');
const { userInfo } = require('os');
//const server = http.createServer((request, response)=>{
//    response.end('Hello World')
//})
app.use(express.static('public'))
app.use(express.json()) 
app.set('view engine', 'ejs');


app.get('/', (request, response) => {
    response.render('pages/index',{
        products: products, 
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

app.get('/user', (request, response) => {
    response.render('pages/user')
})



app.post('/addPlant', (request, result) => {
    const newPlant = {
        id: products.length + 1,
        name: request.body.name,
        price: request.body.price,
        description : request.body.description,
        image : request.body.image
    }
    userInfo.plants.push(newPlant)
    result.status(201).json(newPlant)
})

app.post('/addProduct', (request, result) => {
    const newProduct = {
        id: products.length + 1,
        name: request.body.name,
        price: request.body.price,
        description : request.body.description,
        image : request.body.image
    }
    userInfo.plants.push(newProduct)
    result.status(201).json(newProduct)
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

app.get('/products', (request, response) => {
    response.render('pages/products',{
        products: products
    });
    //response.json(products)
})

app.get('/product/:id', (request, response) => {
    
    const id = Number(request.params.id)
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


app.listen('3000', 'localhost', () => {
    console.log('server start');
});
