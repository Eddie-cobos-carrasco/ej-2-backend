import productManager from './manager/productManager.js'
const manager = new productManager('.files/products.json')

const producto1 = {
title: 'producto prueba 1',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abcd1234',
    stock: 25,}

    const producto2 = {
        title: 'producto prueba 2',
            description: 'Este es un producto prueba 2',
            price: 200,
            thumbnail: 'Sin imagen',
            code: 'abc123',
            stock: 25,}

            const nuevosProductos = async() => {
                await manager.addProduct (producto1)
                await manager.addProduct (producto2)

            }

            nuevosProductos()