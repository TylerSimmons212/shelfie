module.exports = {
    createProduct: function(req,res){
        const {imageURL, productName, price} = req.body
        req.app.get('db').new_product([imageURL, productName, price])
        console.log(product_name)
        .then((product)=>{res.status(200).send(product)})
        .catch((err)=>{res.status(500).send(err)})
    },
    getProduct: function(req,res){
        const {id} = req.params
        req.app.get('db').getProductById(id)
        .then((product)=>{res.status(200).send(product)})
        .catch((err)=>{res.status(500).send(err)})
    }
}