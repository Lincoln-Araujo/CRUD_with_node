const express = require('express');
const { url } = require('inspector');

const server = express();

server.use(express.json());

const products = [];

// getting a product
server.get('/products/:index', (req, res) => {
    const { index } = req.params;
    
    return res.json(products[index]);
});

// getting all products
server.get('/products', (req, res) => {
    return res.json(products);
});

// creating a new product
server.post('/products', (req, res) => {
    const { name } = req.body;
    products.push(name);

    return res.json(products);
});

// updating a product
server.put('/products/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    products[index] = name;

    return res.json(products);
});

// deleting a product
server.delete('/products/:index', (req, res) => {
    const { index } = req.params;

    products.splice(index, 1);
    return res.json({ message: 'item removed'});
})

server.listen(3000);

const p1 = {
    name: "Light Sandwich",
    ingredients: ["bread", "lettuce", "onion", "eggs", "cheese", "cucumber","special sauce"],
    price: 2.5
};

const p2 = {
    name: "Bread with Egg",
    ingredients: ["bread", "egg", "butter"],
    price: 1
};


const p3 = {
    name: "Shrimp Salad",
    ingredients: ["fried shrimp", "lettuce", "tomatoes", "bluberries", "arugula"],
    price: 1
}

document.getElementById("p1-name").innerHTML = p1.name

console.log("teste")