import React from "react";
import PropTypes from "prop-types";

export const SecondsCounter = (props) => {

    return (
        <div className="container text-center d-flex">
            <div className="bg-dark col-2"><i className="far fa-clock h1 text-white mt-2"></i></div>
            <div className="bg-dark col-2"><p className="h1 text-white mt-1">{props.digitOne}</p></div>
            <div className="bg-dark col-2"><p className="h1 text-white mt-1">{props.digitTwo}</p></div>
            <div className="bg-dark col-2"><p className="h1 text-white mt-1">{props.digitThree}</p></div>
            <div className="bg-dark col-2"><p className="h1 text-white mt-1">{props.digitFour}</p></div>
            <div className="bg-dark col-2"><p className="h1 text-white mt-1">seconds</p></div>
        </div>
        
    )
}

SecondsCounter.propTypes = {
    digitOne: PropTypes.number,
    digitTwo: PropTypes.number,
    digitThree: PropTypes.number,
    digitFour: PropTypes.number
}