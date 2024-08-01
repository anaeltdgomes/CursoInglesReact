import React from 'react'
import ReactDOM from 'react-dom/client'

function Login() {

	const handleRegister = (event) => {
		event.preventDefault();
		let email = document.getElementById('registerEmail').value;
		alert("Olá " + email + "\nRegistrado com sucesso!");
		document.getElementById('loginContainer').style.display = 'block';
		document.getElementById('registerContainer').style.display = 'none';
	};
	const handleLogin = (event) => {
		event.preventDefault();
		window.location.href = "../index.html";
	};
	const handleLink = () =>{
		document.getElementById('loginContainer').style.display = 'none';
		document.getElementById('registerContainer').style.display = 'block';
	}

    return (
        <>
			<div id="loginContainer">
				<img src="images\ConnectLogo.png" /><br /><br />
				<form onSubmit={handleLogin}>
					<label>Email:</label>
					<input type="email" className="email" name="loginEmail" id="loginEmail" required />
					<br />
					<label>Senha:</label>
					<input type="password" className="pass" minLength="6" required />
					<br /><br />
					<input type="submit" value="Login" id="submitLogin" />
					<br /><br />
					<p>-------------------- ou --------------------</p>
					<br />
					<a href="#" id="linkRegister" onClick={handleLink}>Criar conta!</a>
					<br /><br />

				</form>
			</div>

			<div id="registerContainer">
				<img src="images\ConnectLogo.png" /><br /><br />
				<form id="formRegister" onSubmit={handleRegister}>
					<label>Nome:</label>
					<input type="text" className="name" minLength="5" required />
					<br />
					<label>Email:</label>
					<input type="email" className="email" id="registerEmail" required />
					<br />
					<label>Criar senha:</label>
					<input type="password" className="passCreate" minLength="6" required />
					<br />
					<label>Repetir senha:</label>
					<input type="password" className="passRedo" minLength="6" required />
					<br /><br />
					<input type="submit" value="Login" id="submitRegister" />
				</form>
			</div>

			<img src="images/LoginPage3BG.png" id="imgRight" />
        </>
    )
}

ReactDOM.createRoot(document.getElementById('mainBox')).render(
    <React.StrictMode>
        <Login/>
    </React.StrictMode>
)