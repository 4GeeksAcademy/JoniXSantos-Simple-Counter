import React, { useState, useEffect } from "react";
import {SecondsCounter} from "./SecondsCounter.jsx";

const Home = () => {
	const [counter, setCounter] = useState(0);
	const [running, setRunning] = useState(true);
	const [inputValue, setInputValue] = useState('');
	const [alertTime, setAlertTime] = useState(null);
	const [display, setDisplay] = useState(false);

	useEffect(() => {
		const interval = running ? setInterval(() => setCounter(counter => counter + 1), 1000) : null;
		return () => interval && clearInterval(interval);
	}, [running]);

	useEffect(() => {
		if (alertTime != null && counter === alertTime) {
			setDisplay(true);
		}
	}, [counter, alertTime])

	//Variables to stablish each digit of the counter
	const one = Math.floor(counter / 1000) % 10;
    const two = Math.floor(counter / 100) % 10;
    const three = Math.floor(counter / 10) % 10;
    const four = Math.floor(counter / 1) % 10;

	//This function will be trigged by clicking on Stop
	const stopTimer = () => {
		setRunning(false);
	}

	//This function will be trigged by clicking on Resume
	const resumeTimer = () => {
		setRunning(true);
	}
	
	//This function will be trigged by clicking on Reset
	const resetTimer = () => {
		setCounter(0);
	}

	const handleButton = () => {
		const time = parseInt(inputValue, 10);
		setAlertTime(time);
		alert(`You will receive an alert when the counter reaches ${inputValue} seconds.`);
		setDisplay(false);
		setInputValue('');
	}

	return (
		<div className="container d-flex flex-column align-items-center text-center mt-3">
			<h1>Counter</h1>
			<div className={`alert alert-danger ${display ? '' : 'd-none'}`} role="alert">
  		  		You have reached the time!
		  	</div>
			<SecondsCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />
			<div className="d-flex mt-3">
				<button type="button" onClick={stopTimer} className="btn btn-danger me-3">Stop</button>
				<button type="button" onClick={resumeTimer} className="btn btn-success me-3">Resume</button>
				<button type="button" onClick={resetTimer} className="btn btn-warning">Reset</button>
			</div>
			<h5 className="mt-5">How many seconds do you need for the alert to show up?</h5>
        	<form className="d-flex">
            	<input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="me-3 text-center" placeholder="Introduce a number" />
            	<button type="button" onClick={handleButton} className="btn btn-primary">OK</button>
        	</form>
		</div>
	);
};

export default Home;
