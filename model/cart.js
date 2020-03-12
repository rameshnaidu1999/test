const mysql = require('mysql');

const CartSchema = new mysql.Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type
    },
    info: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;