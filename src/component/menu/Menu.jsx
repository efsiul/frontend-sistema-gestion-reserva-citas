import React from 'react';
import { Link } from "react-router-dom";

class Menu extends React.Component {

	render() {
	return (
			<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
				<Link className="navbar-brand" to="#">Mi Proyecto</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					
				</button>
				<div className="collapse navbar-collapse" id="navbarCollapse">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link className="nav-link" to="/">Home </Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/nosotros">Nosotros</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/servicios">Servicios</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/contacto">Contacto</Link>
						</li>
					</ul>
					<form className="form-inline mt-2 mt-md-0">
						<input className="form-control mr-sm-2" type="text" placeholder="Buscar" aria-label="Buscar"/>
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
					</form>
				</div>
			</nav>
			)
		}
}
export default Menu;
