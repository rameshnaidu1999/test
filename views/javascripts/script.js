function addCartFunc() {
    var addCart = document.getElementById("add_cart_btn")
    addCart.on("click", function () {
        $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        body:{product_id : 1},
        url: 'http://localhost:3001/users/cart',
        success: function(result) {
            //  $('#champ').html(result)
            console.log("sucess")
        }
      });

    })

};