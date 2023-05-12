import React, { useState} from "react"
// import { isValidProductName, isValidProductDescription, isValidUrl, isValidProductPrice } from "../utils/validatorAdminForm";
import { addProduct } from "../data/addProduct";
import { getProducts } from "../data/getProduct";
import { useLoaderData, Link } from "react-router-dom";

export const loader = () => getProducts()

const AdminProducts = () => {
	const productData = useLoaderData();
	//Image -url
	const [image, setImage] = useState('');
	const [imageValid, setImageValid] = useState(true);
	const [imageError, setImageError] = useState('');

	const handleImageChange = (event) => {
		setImage(event.target.value);
	  };
	
	//   const handleImageBlur = () => {
	// 	const [isValid, errorMessage] = isValidUrl(image);
	// 	setImageValid(isValid);
	// 	setImageError(errorMessage);
	//   };
	
	//Title på produkten
	const [title, setTitle] = useState('');
	const [titleValid, setTitleValid] = useState(true);
	const [titleError, setTitleError] = useState('');

	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	  };
	
	//   const handleTitleBlur = () => {
	// 	const [isValid, errorMessage] = isValidProductName(title);
	// 	setTitleValid(isValid);
	// 	setTitleError(errorMessage);
	//   };
	
	//Description
	const [description, setDescription] = useState('');
	const [descriptionValid, setDescriptionValid] = useState(true);
	const [descriptionError, setDescriptionError] = useState('');

	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
	  };
	
	//   const handleDiscriptionBlur = () => {
	// 	const [isValid, errorMessage] = isValidProductDescription(title);
	// 	setDescriptionValid(isValid);
	// 	setDescriptionError(errorMessage);
	//   };

	//ProductPrice
	const [productPrice, setProductPrice] = useState('');
	const [priceValid, setPriceValid] = useState(true)
	const [priceError, setPriceError] = useState('');
	
	const handlePriceChange = (event) => {
		setProductPrice(event.target.value);
	  };
	
	//   const handlePriceBlur = () => {
	// 	const [isValid, errorMessage] = isValidProductPrice(title);
	// 	setPriceValid(isValid);
	// 	setPriceError(errorMessage);
	//   };


	const handleSubmit = () => {
		event.preventDefault()
		addProduct(image, title, description, productPrice)

		//skicka bilden till servern 
	} 




	return (
		<section className="admin-page">

			<form onSubmit={handleSubmit} className="admin-container">
				<h2 className="admin-form-title"> Lägga till en ny produkt</h2>
				<div className="admin-form">
					<label className="admin-heading">Bild:</label> <br />
					<input
						type="text"
						value={image}
						onChange={handleImageChange}
						// onBlur={handleImageBlur}
						placeholder="http://..."
						className="admin-input"
					/>
				</div>
					{!imageValid && <div className="error-message-admin">{imageError}</div>}

				<div className="admin-form">
					<label className="admin-heading">Produktnamn:</label> <br />
					<input
						type="text"
						value={title}
						onChange={handleTitleChange}
						// onBlur={handleTitleBlur}
						placeholder="Namnet på produkten"
						className="admin-input"
					/>
				</div>
					{!titleValid && <div className="error-message-admin">{titleError}</div> }

				<div className="admin-form">
					<label className="admin-heading">Produkt beskrivning:</label> <br />
					<textarea
						type="text"
						value={description}
						onChange={handleDescriptionChange}
						// onBlur={handleDiscriptionBlur}
						placeholder="Beskrivning av er produkt..."
						cols="30"
						rows="10"
					/>
				</div>
					{!descriptionValid && <div className="error-message-admin">{descriptionError}</div>}

				<div className="admin-form">
					<label className="admin-heading">Pris: </label> <br />
					<input
						type="text"
						value={productPrice}
						onChange={handlePriceChange}
						// onBlur={handlePriceBlur}
						placeholder="ex. 121"
						className="admin-input-price"
					/>
				</div>
					{!priceValid && <div className="error-message-admin">{priceError}</div> }

				<button className="adminFormBtn" onClick={handleSubmit}>Lägg till</button>
			</form>
			<div className="grid-container">
				{productData.map(({id, name, picture, price }) => (
					<div className="product" key={id}> 
						<img 
							className="products-pic"
							src={picture}
						/>
						<p className="products-title">{name}</p>
						<Link>Mer info om produkt</Link>
						<div className="products-price">
							<p className="price"> {price} kr</p>
						</div>
							<button
							className="remove-button">Ta bort</button>
					</div>
				))}

			</div>
		</section>
	)
}

export default AdminProducts