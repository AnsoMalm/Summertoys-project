import {url, shopId} from './constants.js'

async function getProducts() {
	console.log('Getting product...')
	const response = await fetch(url + '?action=get-products&shopid=' + shopId )
	const data = await response.json()
	console.log('Response from Api: ', data)
	return data; 
}

getProducts()

export {getProducts}