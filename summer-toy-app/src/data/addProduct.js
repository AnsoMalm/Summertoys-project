 import {url, shopId} from './constants.js'

export async function addProduct(image, title, description, productPrice) {
	console.log('Adding product...')

	const data = {
		picture: image,
		name: title,
		description: description,
		price: productPrice, 
		shopid: shopId,
		action: 'add-product'
	}

	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	}
	const response = await fetch(url, options)
	const statusObject = await response.json()
	console.log('Response from API:', statusObject)
	if(statusObject.status === 'success' ) {
		return true; 
	} else {
		return false; 
	}
}