import {url, shopId} from './constants.js'

export async function deleteOneProduct(productId) {
	console.log('Preparing to delete One Product: ', productId)

	const url = 'https://forverkliga.se/JavaScript/api/fe/?action=delete-product'

	// let ids = await getProductIds(); 

	// ids.filter(async id => {
		const data = { 
			action: 'delete-product',
			productid: productId,
			shopid: shopId, 
			}; 

		const options = {
			method: 'POST', 
			headers: { 'Content-Type': 'application/json'},
			body: JSON.stringify(data)
		};
		const response = await fetch(url, options); 
		const statusObject = await response.json();
		if (statusObject.status === 'success') {
			console.log('sucess');
			return true
		} 
		console.log('Failed ', statusObject)
			return false 
	}



// async function getProductIds() {
// 	console.log('Getting products...')
// 	const response = await fetch(url + '?action=get-products&shopid=' + shopId)
// 	const data = await response.json()
// 	console.log('Response from API:', data)
// 	return data.map(product => product.id) 
// }
