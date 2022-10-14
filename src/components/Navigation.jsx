import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
	return (
		<div className="navigation">
			<ul>
				<NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
					<li>Accueil</li>
				</NavLink>
				<NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
					<li>À propos</li>
				</NavLink>
			</ul>
		</div>
	);
}
