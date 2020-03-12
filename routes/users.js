const express = require('express');
const router = express.Router();

const mysql = require('mysql');


// Connect to MySql
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ramesh7337",
  database : 'test'
});


// Start
router.get('/', (req, res) => {
        res.render('home');
});

// DB message
// router.get('/', (req, res) => {
//     async = true;
//     con.query("SELECT * FROM products", function(err, rows, fields){
//         if (err) throw err
//         res.render('home', { items: rows });
//     })
// });

// Cart
//  router.get('/cart', (req, res) => {
//      res.render('cart',);
//  });

//route for insert data
router.get('/cart',(req, res) => {

//     // let data = {product_name: req.body.product_name, product_price: req.body.product_price};
//     //let sql = "INSERT COLUMNS INTO cart_table SELECT * FROM products";
//     // let query = conn.query(sql,(err, results) => {
//     //   if(err) throw err;
//     //    res.redirect('submit', {list: results});
//     //     console.log( req.params.id);
//     // });

    con.connect(function (err) {
        var sql = "SELECT * FROM products WHERE id>1 ";
        con.query(sql, (err, results, fields) => {
            if(err) throw err;
           console.log(results);
        console.log('Product added now'); 
        res.render('cart', {list: results})
        })
    })
});

router.post('/cart',(req, res) => {

    //     // let data = {product_name: req.body.product_name, product_price: req.body.product_price};
    //     //let sql = "INSERT COLUMNS INTO cart_table SELECT * FROM products";
    //     // let query = conn.query(sql,(err, results) => {
    //     //   if(err) throw err;
    //     //    res.redirect('submit', {list: results});
    //     //     console.log( req.params.id);
    //     // });
    const {product_id} = req.body
        con.connect(function (err) {
            var sql = `INSERT INTO CART (product_id) VALUES (${product_id}) `;
            con.query(sql, (err, results, fields) => {
                if(err) throw err;
               console.log(results);
            console.log('Product added now'); 
            res.render('cart', {list: results})
            })
        })
    });
// Buy
router.get('/buy', (req, res) => {
    res.render('buy');
});

router.get('/category',(req,res) => {
    con.connect(function (err) {
        var sql = "SELECT * FROM products WHERE category = 'phone' ";
        con.query(sql, (err, results, fields) => {
            if(err) throw err;
           console.log(results);
        console.log('Product added now'); 
        res.render('category', {list: results})
        })
    })
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