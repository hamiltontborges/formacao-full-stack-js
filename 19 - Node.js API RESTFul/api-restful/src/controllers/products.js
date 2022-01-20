const ProductsModel = require('../models/products')

async function get(req, res) {
    const { id } = req.params

    let obj = id ? { _id: id } : null

    const products = await ProductsModel.find(obj)

    res.send(products)
}

async function post(req, res) {
    const {
        name,
        brand,
        price,
    } = req.body

    const product = new ProductsModel({
        name,
        brand,
        price,
    })

    product.save()

    res.send({
        message: "sucess"
    })
}

async function put(req, res) {
    const { id } = req.params

    const product = await ProductsModel.findOneAndUpdate({ _id: id }, req.body, { new: true }) // id / as mudanças / se quer que retorne "true"

    res.send({
        message: "sucess",
        product,
    })

    /* TRECHO DE CÓDIGO ABAIXO ATUALIZA O PRODUTO MAS NÂO RETORNA O PRODUTO ATUALIZADO
    
        const product = await ProductsModel.findOne({ _id: id })
        
        ! await product.updateOne(req.body)
    
        res.send({
            message: "sucess",
            ! product,
        }) */


}

async function remove(req, res) {
    const { id } = req.params

    const remove = await ProductsModel.deleteOne({ _id: id })

    const message = remove.deletedCount ? "sucess" : "error"

        res.send({
            message: message
        })
}

module.exports = {
    get,
    post,
    put,
    remove,
}