import React, { useState, useEffect } from "react";
import {SecondsCounter} from "./SecondsCounter.jsx";

const Home = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter(counter => counter + 1);
		}, 1000);
		return () => clearInterval(interval)
	}, []);

    const one = Math.floor(counter/1000) % 10;
    const two = Math.floor(counter/100) % 10;
    const three = Math.floor(counter/10) % 10;
    const four = Math.floor(counter/1) % 10;

	return (
		<div className="container text-center mt-3">
			<h2>You have been here for:</h2>
			<SecondsCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />
		</div>
	);
};

export default Home;
