import {url, shopId} from './constants.js'
import { Productdata } from './Productdata.js'

 
 async function addProduct(oneProduct) {
	console.log('Adding product...')

	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(oneProduct)
	}
	const response = await fetch(url, options)
	const statusObject = await response.json()
	console.log('Response from API:', statusObject)
}

async function addAllProducts() {
	const products = Productdata.map(product => ({
		picture: product.picture, 
		name: product.name, 
		description: product.description, 
		price: product.price, 
		action: 'add-product',
		shopid: shopId
	})); 
	console.log(products)

	products.forEach(product => {
		addProduct(product)
	})
}

addAllProducts();





