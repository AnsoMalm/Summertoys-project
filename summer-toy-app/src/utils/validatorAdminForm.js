
//url på adminpage 
function isValidUrl(fullUrl) {
	const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  
	if (fullUrl.length < 7) {
	  return { isValid: false, message: 'Vänligen fyll i adressen med 7 bokstäver' };
	}
  
	if (!urlRegex.test(fullUrl)) {
	  return { isValid: false, message: 'Vänlig använd giltiga tecken tack!' };
	}
  
	return { isValid: true, message: '' };
  }


//namnet på prodkukten 
function isValidProductName(productName) {
	if (productName.length < 3 ) {
		return [false, 'Minst 3 tecken tack.']; 
	}
	const allowChars = ' -´abcdefghijklmnopqrstuvwxyzåäö'
	for(let i = 0; i < productName.length; i++) {
		let c = productName.charAt(i).toLowerCase()
		if(!allowChars.includes(c) ) {
			return [false, 'Vänligen använd bara bokstäver']; 
		}
	}
	return [true, '']; 
}
//Beskrivning av produkt i adminpage 
function isValidProductDescription(productDescription) {
	if(productDescription.length < 101) {
		return [false, 'Minst 10 och max 100 tecken tack.'];
	}
	const allowSymbol = ' 0123456789abcdefghijklmnopqristuvwxyzåäö?!,. '
	for(let i = 0; i < productDescription.length; i++ ) {
		let s = productDescription.charAt(i)
		if(!allowSymbol.includes(s) ) {
			return [false, 'Vänligen använd bara bokstäver och siffor']
		}
	}
	return [true, '']
}


//priset i Adminpage 
function isValidProductPrice(productPrice) {
	if(productPrice.length < 3) {
		return [false, 'Fyll i produktens pris med minst 2 siffror']; 
	}
	const allowNumberPrice = '0123456789'
	for(let i=0; i < productPrice.length; i++) {
		let r = productPrice.charAt(i) 
		if(!allowNumberPrice.includes(r) ) {
			console.log('Isvalid price: ' + r)
			return [false, 'Vänligen använd siffor tack']
		}
	}
	return [true, '']
}



export { isValidProductName, isValidProductDescription, isValidUrl, isValidProductPrice }