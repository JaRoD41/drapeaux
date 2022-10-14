import React from "react";

export default function Card({country}) {
	return (
		<li className="card">
    <img src={country.flags.svg} alt={`${country.name.official}`} />
			<div className="infos">
				<h2>{country.translations.fra.common}</h2>
				<h4>{country.capital}</h4>
				<p>Pop. {country.population.toLocaleString()} hab.</p>
			</div>
		</li>
	);
}
