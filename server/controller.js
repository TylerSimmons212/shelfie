module.exports = {
    createProduct: function(req,res){
        const {imageURL, productName, price} = req.body
        req.app.get('db').new_product([imageURL, productName, price])
        .then((product)=>{res.status(200).send(product)})
        .catch((err)=>{res.status(500).send(err)})
    },
    getProduct: function(req,res){
        req.app.get('db').get_products()
        .then((product)=>{res.status(200).send(product)})
        .catch((err)=>{res.status(500).send(err)})
    }
}