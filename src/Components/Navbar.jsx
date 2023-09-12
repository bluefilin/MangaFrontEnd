import React from 'react';
import { Link, Outlet, useLocation, useNavigate, } from 'react-router-dom';
import Logo from './img/LOGO.png'
import MangaASD from './img/MangaASD.png'
import "./Navbar.css"

export const Navbar = () => {
	const { state } = useLocation();
	const navigate = useNavigate();

	console.log(state);

	const onLogout = () => {
		navigate('/login', {
			replace: true,
		});
	};

	return (
		<>
			<header>
				<h1>
					<a className='Logo' href="/">
						<img  src={Logo} alt="" />
						<img src={MangaASD} alt="" className="MangaASD" />
					</a>
				</h1>

				{state?.logged ? (
					<div className='user'>
						<span className='username'>{state?.name}</span>
						<button className='btn-logout' onClick={onLogout}>
							Cerrar sesión
						</button>
					</div>
				) : (
					<nav>
						<Link to='/login'>Iniciar sesion</Link>
						<a href="/register">
							<button className='Registrarse'>Registrarse</button>
						</a>
					</nav>
				)}
			</header>
			<Outlet />
		</>
	);
};
