import React from 'react'
import './Header.css'

export default function Header(){

	return(
		<header>
			<nav>
				<ul>
					<li id="link-home"><a href="#home">Home</a></li>
					<li id="link-company"><a href="#company">Empresa</a></li>
					<li id="link-service"><a href="#service">Serviços</a></li>
					<li id="link-contact"><a href="#contact">Contatos</a></li>
				</ul>
			</nav>
		</header>
 	);
}