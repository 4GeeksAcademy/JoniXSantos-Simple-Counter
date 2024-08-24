import React, { useState, useEffect } from "react";
import {SecondsCounter} from "./SecondsCounter.jsx";

const Home = () => {
	const [counter, setCounter] = useState(0);
	const [running, setRunning] = useState(true);
	const [inputValue, setInputValue] = useState('');
	const [alertTime, setAlertTime] = useState(null);
	const [display, setDisplay] = useState(false);
	const [countUp, setCountUp] = useState(true);
	const [timerInput, setTimerInput] = useState('');
	const [countDownTime, setCountDownTime] = useState(null);

	useEffect(() => {
		if (running) {
			const interval = setInterval(() => {
				if (countUp) {
					setCounter(counter => counter + 1);
				} else {
					if (countUp === false && countDownTime >= 0) {
						if (counter === 0) {
							setRunning(false);
						} else {
							setCounter(counter => counter - 1);
						}
					}
				}
			}, 1000);
			return () => clearInterval(interval)
		}	
	}, [running, counter, countUp]);

	useEffect(() => {
		if (alertTime != null && counter === alertTime) {
			setDisplay(true);
		}
	}, [counter, alertTime])

	//Variables to stablish each digit of the counter
	const clock = countUp ? "far fa-clock" : "fas fa-hourglass-start";
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
		const seconds = parseInt(inputValue, 10);
		setAlertTime(seconds);
		alert(`You will receive an alert when the counter reaches ${inputValue} seconds.`);
		setDisplay(false);
		setInputValue('');
	}

	const clockChange = () => {
		setCountUp(prev => !prev);
		setRunning(prev => !prev);
		setDisplay(false);
		setCounter(0);
	}

	const handleTimerButton = () => {
		const time = parseInt(timerInput, 10);
		setCounter(time);
		setCountDownTime(counter);
		setRunning(true);
		setTimerInput('');
	}

	return (
		<div className="container d-flex flex-column align-items-center text-center mt-3">
			<h1>{countUp ? 'Counter' : 'Timer'}</h1>
			<div className={`alert alert-danger ${display && countUp ? '' : 'd-none'}`} role="alert">
  		  		You have reached the time!
		  	</div>
			<SecondsCounter icon={clock} digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />
			<div className="d-flex mt-3">
				<button type="button" onClick={stopTimer} className="btn btn-danger me-3" disabled={!running ? true : false}>Stop</button>
				<button type="button" onClick={resumeTimer} className="btn btn-success me-3" disabled={running ? true : false || !countUp && counter == 0 ? true : false}>Resume</button>
				<button type="button" onClick={resetTimer} className="btn btn-warning me-3" disabled={counter == 0 ? true : false}>Reset</button>
				<button type="button" onClick={clockChange} class="btn btn-secondary">{countUp ? "Change to Timer" : "Change to Counter"}</button>
			</div>
			<div className={`d-flex flex-column align-items-center ${countUp ? "" : "d-none"}`}>
				<h5 className="mt-5">How many seconds do you need for the alert to show up?</h5>
        		<form className="d-flex">
            		<input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="me-3 text-center" placeholder="Introduce a number" />
            		<button type="button" onClick={handleButton} className="btn btn-primary">OK</button>
        		</form>
			</div>
			<div className={`d-flex flex-column align-items-center ${countUp ? "d-none" : ""}`}>
				<h5 className="mt-5">Choose the time:</h5>
        		<form className="d-flex">
            		<input type="number" value={timerInput} onChange={(e) => setTimerInput(e.target.value)} className="me-3 text-center" placeholder="Introduce a number" />
            		<button type="button" onClick={handleTimerButton} className="btn btn-primary">OK</button>
        		</form>
			</div>
		</div>
	);
};

export default Home;
