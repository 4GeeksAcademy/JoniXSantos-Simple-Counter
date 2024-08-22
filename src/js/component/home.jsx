import React, { useState, useEffect } from "react";
import {SecondsCounter} from "./SecondsCounter.jsx";

const Home = () => {
	const [counter, setCounter] = useState(0);
	const [running, setRunning] = useState(true);

	useEffect(() => {
		const interval = running ? setInterval(() => setCounter(counter => counter + 1), 1000) : null;
		return () => interval && clearInterval(interval);
	}, [running]);

    const one = Math.floor(counter/1000) % 10;
    const two = Math.floor(counter/100) % 10;
    const three = Math.floor(counter/10) % 10;
    const four = Math.floor(counter/1) % 10;

	const stopTimer = () => {
		setRunning(false);
	}

	const resumeTimer = () => {
		setRunning(true);
	}
	
	const resetTimer = () => {
		setCounter(0);
	}

	return (
		<div className="container d-flex flex-column align-items-center text-center mt-3">
			<h1>Counter</h1>
			<SecondsCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />
			<div className="d-flex mt-3">
				<button type="button" onClick={stopTimer} class="btn btn-danger me-3">Stop</button>
				<button type="button" onClick={resumeTimer} class="btn btn-success me-3">Resume</button>
				<button type="button" onClick={resetTimer} class="btn btn-warning">Reset</button>
			</div>
		</div>
	);
};

export default Home;
