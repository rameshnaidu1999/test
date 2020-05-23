const express = require('express');
const con = require('../config');

const router = express.Router();
const bodyParser = require('body-parser');

// Init Express app
const app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// Start
router.get('/', (req, res) => {
    async = true;
    con.query("SELECT * FROM products", function(err, rows, fields){
        if(err) throw err;
        res.render('home', { items: rows });
    })
});

router.get('/vegetables', (req, res) => {
    con.query('SELECT * FROM products WHERE category = "vegetables" ', function(err, rows, fields){
        if(err) throw err;
        res.render('vegetables', { items: rows });
    })
});

router.get('/fruits', (req, res) => {
    con.query('SELECT * FROM products WHERE category = "fruits" ', function(err, rows, fields){
        if(err) throw err;
        res.render('fruits', { items: rows });
    })
});

router.get('/Drinks', (req, res) => {
    con.query('SELECT * FROM products WHERE category = "drinks" ', function(err, rows, fields){
        if(err) throw err;
        res.render('drinks', { items: rows });
    })
});

router.get('/Ceramic', (req, res) => {
   
        res.render('Ceramic');

});

app.get('/(:id)', function(req, res, next){
    req.getConnection(function(error, conn) {
        conn.query('SELECT * FROM users WHERE id = ' + req.params.id, function(err, rows, fields) {
            if(err) throw err
            
            // // if user not found
            // if (rows.length <= 0) {
            //     req.flash('error', 'User not found with id = ' + req.params.id)
            //     res.redirect('/users')
            // }
            // else { // if user found
            //     // render to views/user/edit.ejs template file
            //     res.render('user/edit', {
            //         title: 'Edit User', 
            //         //data: rows[0],
            //         id: rows[0].id,
            //         name: rows[0].name,
            //         age: rows[0].age,
            //         email: rows[0].email                    
            //     })
            // }
            res.render('product', { items: rows });            
        })
    })
})

//route for insert data
router.post('/',(req, res) => {
    // const { id, title, amount, info } = req.body;
    // let errors = [];
    // // let data = { title: req.body.title, amount: req.body.amount, info: req.body.info };
    // let sql = "INSERT INTO cart SET WHERE `id`=? `title`=? `amount`=? `info`=? ";
    // con.query(sql, (err, rows, results) => {
    //   if(err) throw err;
    //   res.render('/', { list: rows } );
    // });
    var user = { id: req.params.id }
    
    
        con.query('INSERT INTO cart SET ?' + req.params.id, user, function(err, result) {
            //if(err) throw err
            if (err) {
                //req.flash('error', err)
                // redirect to users list page
                res.render('home', { items: rows });
            } else {
               // req.flash('success', 'User deleted successfully! id = ' + req.params.id)
                // redirect to users list page
                res.render('home', { items: rows });
            }
        })
    });

//route for cart page
router.get('/cart',(req, res) => {
    async = true;
    con.query("SELECT * FROM cart", function(err, rows, fields){
        if(err) throw err;
        res.render('cart', { list: rows });
        if (list = '') {
            errors.push({ msg: 'No products added to cart yet !!' })
        }
    })
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