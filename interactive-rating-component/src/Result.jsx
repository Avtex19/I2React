import React from 'react';
import tyImg from "./images/illustration-thank-you.svg";
import "./Result.css";

function Result(props) {
    return <div className="result">
        <img src={tyImg} alt="" />
        <div className="score-text">
            <p id="first-p-tag">You selected {props.chosenNumber} out of 5</p>
            <h2>Thank You!</h2>
            <p id="second-text">We appreciate you taking the time to give a rating.
                If you ever need more support, don't hesitate to
                get in touch!</p>
        </div>
    </div>

}


export default Result;
