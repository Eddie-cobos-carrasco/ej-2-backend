import fs from 'fs'
class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    addProduct(productData) {
        const newProduct = {
            id: this.generateUniqueId(),
            ...productData,
        };
        this.products.push(newProduct);
        return newProduct;
    }

    getProductById(id) {
        const product = this.products.find((product) => product.id === id);
        if (!product) {
            throw new Error('Producto no encontrado');
        }
        return product;
    }

    updateProduct(id, updatedData) {
        const index = this.products.findIndex((product) => product.id === id);
        if (index === -1) {
            throw new Error('Producto no encontrado');
        }

        updatedData.id = id;
        this.products[index] = { ...this.products[index], ...updatedData };
        return this.products[index];
    }

    deleteProduct(id) {
        const index = this.products.findIndex((product) => product.id === id);
        if (index === -1) {
            throw new Error('Producto no encontrado');
        }

        const deletedProduct = this.products.splice(index, 1);
        return deletedProduct[0];
    }

    generateUniqueId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    }
}

const productManager = new ProductManager();

const newProductData = {
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25,
};
const newProduct = productManager.addProduct(newProductData);
console.log('Producto agregado:', newProduct);

const allProducts = productManager.getProducts();
console.log('Lista de productos:', allProducts);

try {
    const productIdToFind = newProduct.id;
    const foundProduct = productManager.getProductById(productIdToFind);
    console.log('Producto encontrado por ID:', foundProduct);
} catch (error) {
    console.error('Error al buscar producto por ID:', error.message);
}

try {
    const productIdToUpdate = newProduct.id;
    const updatedProductData = { title: 'Producto actualizado', price: 250 };
    const updatedProduct = productManager.updateProduct(productIdToUpdate, updatedProductData);
    console.log('Producto actualizado:', updatedProduct);
} catch (error) {
    console.error('Error al actualizar producto:', error.message);
}

try {
    const productIdToDelete = newProduct.id;
    const deletedProduct = productManager.deleteProduct(productIdToDelete);
    console.log('Producto eliminado:', deletedProduct);
} catch (error) {
    console.error('Error al eliminar producto:', error.message);
}
