import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

export default function About() {
	return (
		<div>
			<Logo />
			<Navigation />
			<h1>À propos</h1>
			<br />
			<p>
				Cette application a été réalisée en React JS et utilise le framework Sass pour le style.
			</p>
		</div>
	);
}
