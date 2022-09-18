const express = require('express');
const { url } = require('inspector');

const server = express();

server.use(express.json());

const products = [
    {
        name: "Light Sandwich",
        ingredients: ["bread", "lettuce", "onion", "eggs", "cheese", "cucumber","special sauce"],
        price: 2.5,
        image: url("./images/sandwich.jpg")
    },
    {
        name: "Bread with Egg",
        ingredients: ["bread", "egg", "butter"],
        price: 1,
        image: url("./images/bread_with_egg.jpg")
    },
    {
        name: "Shrimp Salad",
        ingredients: ["fried shrimp", "lettuce", "tomatoes", "bluberries", "arugula"],
        price: 1,
        image: url("./images/shrimp_salad.jpg")
    }
];

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