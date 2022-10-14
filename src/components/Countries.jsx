import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Countries() {
	const [data, setData] = useState([]);
	const [rangeValue, setRangeValue] = useState(36);
	const [selectedRadio, setSelectedRadio] = useState("");
	const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
	useEffect(() => {
		axios
			.get("https://restcountries.com/v3.1/all")
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="countries">
			<ul className="radio-container">
				<input
					type="range"
					min="1"
					max="250"
					defaultValue={rangeValue}
					onChange={(e) => setRangeValue(e.target.value)}
				/>
				{radios.map((continent) => (
					<li key={continent}>
						<input
							type="radio"
							id={continent}
							name="continentRadio"
							onChange={(e) => setSelectedRadio(e.target.id)}
						/>
						<label htmlFor={continent}>{continent}</label>
					</li>
				))}
			</ul>
			<ul>
				{data
					.filter((country) => country.continents[0].includes(selectedRadio))
					.sort((a, b) => a.translations.fra.common.localeCompare(b.translations.fra.common))
					.slice(0, rangeValue)
					.map((country, index) => (
						<Card key={index} country={country} />
					))}
			</ul>
		</div>
	);
}
