import React from "react";
import PropTypes from "prop-types";

export const SecondsCounter = (props) => {
    return (
        <div className="container text-center d-flex">
            <div className="bg-dark col-2"><p className="h1 text-white">{props.digitOne}</p></div>
            <div className="bg-dark col-2"><p className="h1 text-white">{props.digitTwo}</p></div>
            <div className="bg-dark col-2"><p className="h1 text-white">{props.digitThree}</p></div>
            <div className="bg-dark col-2"><p className="h1 text-white">{props.digitFour}</p></div>
            <div className="bg-dark col-4"><p className="h1 text-white">seconds</p></div>
        </div>
        
    )
}

SecondsCounter.propTypes = {
    digitOne: PropTypes.number,
    digitTwo: PropTypes.number,
    digitThree: PropTypes.number,
    digitFour: PropTypes.number
}