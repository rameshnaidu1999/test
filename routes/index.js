const express = require('express');
const mysql = require('mysql');
const router = express.Router();


// Connect to MySql
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ramesh7337",
    database : 'test'
});


// Start
router.get('/', (req, res) => {
    async = true;
    con.query("SELECT * FROM products", function(err, rows, fields){
        if(err) throw err;
        res.render('home', { items: rows });
    })
});

router.get('/:id', (req, res) => {
    con.query('SELECT * FROM products learner_id = ?', [req.params.id], (err, rows, fields) => {
    if (!err)
    res.render('cart', { list: rows });
    else
    console.log(err);
    })
});

//route for cart page
router.get('/cart',(req, res) => {
    res.render('cart');
});


router.get('/category',(req,res) => {
    res.render('category');
})

//Login 
router.get('/signin', (req, res) => {
    res.render('login');
});

// Orders
router.get('/orders', (req, res) => {
    res.render('orders');
});

//Register
router.get('/register', (req, res) => {
    res.render('register');
});


module.exports = router;