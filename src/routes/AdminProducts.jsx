import React, { useState} from "react"
import { isValidProductName, isValidProductDescription, isValidUrl, isValidProductPrice } from "../utils/validatorAdminForm";
import { addProduct } from "../data/addProduct";
import { getProducts } from "../data/getProduct";
import { useLoaderData, Link } from "react-router-dom";
import { deleteOneProduct } from "../data/DeleteProduct";

export const loader = () => getProducts()

const AdminProducts = () => {
	const productData = useLoaderData();
	const [submitMessage, setSubmitMessage] = useState('');
	//Image -url
	const [image, setImage] = useState('');
	const [imageValid, setImageValid] = useState(true);
	const [imageError, setImageError] = useState('');

	const handleImageChange = (event) => {
		setImage(event.target.value);
	  };
	
	  const handleImageBlur = () => {
		console.log('isvalidUrl', isValidUrl)
		const {isValid, message} = isValidUrl(image);
		setImageValid(isValid);
		setImageError(message);
	  };
	
	//Title till produkten
	const [title, setTitle] = useState('');
	const [titleValid, setTitleValid] = useState(true);
	const [titleError, setTitleError] = useState('');

	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	  };
	
	  const handleTitleBlur = () => {
		const [titleValid, errorMessage] = isValidProductName(title);
		setTitleValid(titleValid);
		setTitleError(errorMessage);
	  };
	
	//Description
	const [description, setDescription] = useState('');
	const [descriptionValid, setDescriptionValid] = useState(true);
	const [descriptionError, setDescriptionError] = useState('');

	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
	  };
	
	  const handleDescriptionBlur = () => {
		const [descriptionValid, errorMessage] = isValidProductDescription(description);
		setDescriptionValid(descriptionValid);
		setDescriptionError(errorMessage);
	};

	//ProductPrice
	const [productPrice, setProductPrice] = useState('');
	const [priceValid, setPriceValid] = useState(true)
	const [priceError, setPriceError] = useState('');
	
	const handlePriceChange = (event) => {
		setProductPrice(event.target.value);
	  };
	
	  const handlePriceBlur = () => {
		const [priceValid, errorMessage] = isValidProductPrice(productPrice);
		setPriceValid(priceValid);
		setPriceError(errorMessage);
	  };


	  const handleSubmit = async (event) => {
		event.preventDefault();
		if (imageValid && titleValid && descriptionValid && priceValid) {
			try {
				await addProduct(image, title, description, productPrice);
				setSubmitMessage('Nu är produkten upplagd. Ladda om sidan tack!');
			} catch (error) {
				setSubmitMessage('Något gick fel, försök igen senare.');
			}
		} else {
			setSubmitMessage('Kontrollera att alla fält är korrekt ifyllda.');
		}
	};

	const handleDelete = async (productId) => {
		await deleteOneProduct(productId);

	}




	return (
		<section className="admin-page">

			<form onSubmit={handleSubmit} className="admin-container">
				<h2 className="admin-form-title"> Lägga till en ny produkt</h2>
				<div className="admin-form">
					<label className="admin-heading">Lägg till bild:</label> <br />
					<input
						type="url"
						value={image}
						onChange={handleImageChange}
						onBlur={handleImageBlur}
						placeholder="http://..."
						className={`admin-input ${imageValid !== null && (imageValid ? "valid-input" : "invalid-input")}`}
					/>
				</div>
					{!imageValid && <div className="error-message-admin">{imageError}</div>}

				<div className="admin-form">
					<label className="admin-heading">Produktnamn:</label> <br />
					<input
						type="text"
						value={title}
						onChange={handleTitleChange}
						onBlur={handleTitleBlur}
						placeholder="Namnet på produkten"
						className={`admin-input ${titleValid !== null && (titleValid ? "valid-input" : "invalid-input")}`}
					/>
				</div>
					{!titleValid && <div className="error-message-admin">{titleError}</div> }

				<div className="admin-form">
					<label className="admin-heading">Produkt beskrivning:</label> <br />
					<textarea
						type="text"
						value={description}
						onChange={handleDescriptionChange}
						onBlur={handleDescriptionBlur}
						placeholder="Beskrivning av er produkt..."
						cols="30"
						rows="10"
						className={`${descriptionValid !== null && (descriptionValid ? "valid-input" : "invalid-input")}`}
					/>
				</div>
					{!descriptionValid && <div className="error-message-admin">{descriptionError}</div>}

				<div className="admin-form">
					<label className="admin-heading">Pris: </label> <br />
					<input
						type="text"
						value={productPrice}
						onChange={handlePriceChange}
						onBlur={handlePriceBlur}
						placeholder="ex. 98"
						className={`admin-input-price ${priceValid !== null && (priceValid ? "valid-input" : "invalid-input")}`}
					/>
				</div>
					{!priceValid && <div className="error-message-admin">{priceError}</div> }

				<button className="adminFormBtn" onClick={handleSubmit}>Lägg till</button>
				<div className="submit-message">{submitMessage}</div>
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
							className="remove-button" onClick={() => handleDelete(id)}>Ta bort</button>
					</div>
				))}
			</div>
		</section>
	)
}

export default AdminProducts