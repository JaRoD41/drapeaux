import React from "react";

export default function Card({country}) {
	return (
		<li className="card">
    <img src={country.flags.svg} alt="drapeau" />
			<div className="infos">
				<h2>{country.name.official}</h2>
			</div>
		</li>
	);
}
