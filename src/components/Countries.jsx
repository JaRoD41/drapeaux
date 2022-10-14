import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Countries() {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get("https://restcountries.com/v3.1/all")
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="countries">
			<h1>COUNTRIES</h1>
			<ul>
				{data.map((country, index) => (
					<Card key={index} country={country} />
				))}
			</ul>
		</div>
	);
}
