import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
	return (
		<div className="navigation">
			<ul>
				<NavLink to="/">
					<li>accueil</li>
				</NavLink>
				<NavLink to="/about">
					<li>à propos</li>
				</NavLink>
			</ul>
		</div>
	);
}
