import { useState } from "react"
import { useNavigate } from 'react-router-dom'

const AdminLogin = (props) => {
	const [userName, setUserName] = useState (''); 
	const [password, setPassword] = useState('');

	const [isPasswordCorrect, setIsPasswordCorrect] = useState(false); 
	const [isUserNameCorrect, setIsUserNameCorrect] = useState(false); 
	const [hasSubmitted, setHasSubmitted] = useState(''); 
	const [userNameErrorMessage, setUserNameErrorMessage] = useState(''); 
	const correctPassword = "password";
	const correctUserName = "admin";
	const navigate = useNavigate();
	const allowedChars = 'abcdefghijklmnopqrstuvwxyzåäö'
	const [userNameError, setUserNameError] = useState(false); 
	const [passwordError, setPasswordError] = useState(false); 

	const LoginEvents = (event) => {
		event.preventDefault();
		setHasSubmitted(true);
		

		if ((password === correctPassword) && (userName === correctUserName)) {
			setIsPasswordCorrect(true);
			setIsUserNameCorrect(true);
			// props.setShowAdminPage(true);
			//closeLogin();
			navigate('users')
		} else {
			if (password !== correctPassword) {
				setIsPasswordCorrect(false)
				setPasswordError(true)
				
			} else {
				setPasswordError(false)
			}
			if (userName !== correctUserName) {
				setIsUserNameCorrect(false)
				setUserNameError(true)
			} else {
				setUserNameError(false)
			}
		}		
	}

	const handleInputChange = (event) => {
		setPassword(event.target.value); 
		if (hasSubmitted) {
			setIsPasswordCorrect(event.target.value === correctPassword); 
		}
	}; 

	const inputChange = (event) => {
		const input = event.target.value; 
		setUserName(input); 
		if(hasSubmitted) {
			setIsUserNameCorrect(input === correctUserName)
			for(let i = 0; i < input.length; i++ ) {
				let c = input.charAt(i).toLowerCase(); 
				if(!allowedChars.includes(c)) {
					setUserNameErrorMessage('Vänligen använd bara bokstäver tack.')
				}
			}
		} else {
					setUserNameErrorMessage(''); 
		}
		return [true, setHasSubmitted(false)]
	}
	
	const areFieldsFilled = userName.length > 2 && password.length > 2; 
	
	return (
		<section className="admin-login">
			<h1>Personal login</h1>
			<form className="form">
					<label className="input-text"
					>Användarnamn: </label> <br />
						<input 
							type="text"
							placeholder="Skriv in ditt användarnamn"
							className="personal-input"
							value={userName}
							onChange={inputChange}
							onBlur={inputChange}
						/> <br />
				<div className="error-placeholder">
						{userNameErrorMessage && <p className="error-message">{userNameErrorMessage}</p>}
						{hasSubmitted && userNameError && <p className='error-message'>Felaktigt användarnamn, Vänligen prova igen!</p>}
				</div>

					<label className="input-text">Lösenord: </label> 
						<br />
						<input 
							type="password"
							placeholder="Skriv in ditt lösenord"
							className="personal-input"
							value={password}
							onChange={handleInputChange}
							onBlur={handleInputChange}
							/> <br />
				
					<div className="error-placholder">
						{hasSubmitted && passwordError && <p className='error-message'>Felaktigt lösenord, Vänligen prova igen!</p> }
					</div>
						<br />
		
					<button 
					className="login-button"
					type="submit"
					onClick={LoginEvents}
					disabled={!areFieldsFilled}>Logga in
					</button>
					
			</form>
		</section>
	)
}

export default AdminLogin