import React from 'react'
import ReactDOM from 'react-dom/client'

function hideSidebar() {
	const sidebar = document.querySelector('.sidebar');
	sidebar.style.display = 'none';
}
function showSidebar() {
	const sidebar = document.querySelector('.sidebar');
	sidebar.style.display = 'flex';
}

function Topo() {
	return(
	<>
		<ul className="sidebar">
			<li onClick={hideSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></a></li>
			<li><a href="html/module.html">Cursos</a></li>
			<li><a href="html/Login.html">Login</a></li>
			<li><a href="html/About.html">Sobre</a></li>
			<li><a href="html/Contact.html">Contato</a></li>
		</ul>
		<ul>
			<li><a href="./index.html">Home</a></li>
			<li className="hideOnMobile"><a href="html/module.html">Cursos</a></li>
			<li className="hideOnMobile"><a href="html/Login.html">Login</a></li>
			<li className="hideOnMobile"><a href="html/About.html">Sobre</a></li>
			<li className="hideOnMobile"><a href="html/Contact.html">Contato</a></li>
			<li className="menuBtn" onClick={showSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></a></li>
		</ul>
	</>
	)
}

ReactDOM.createRoot(document.querySelector('nav')).render(
	<React.StrictMode>
		<Topo />
	</React.StrictMode>
)
