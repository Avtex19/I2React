import React, { useState } from "react";
import "./MiddlePart.css";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function MiddlePart() {
    const [billAmount, setBillAmount] = useState("");
    const [numOfPeople, setNumOfPeople] = useState("");
    const [tipAmount, setTipAmount] = useState('0.00');
    const [totalAmount, setTotalAmount] = useState('0.00');
    const [customTipPercentage, setCustomTipPercentage] = useState('');

    const calculateTip = (tipAmount) => {
        setTipAmount(tipAmount);
    };

    const calculateTotal = (totalAmount) => {
        setTotalAmount(totalAmount);
    };

    const resetValues = () => {
        setBillAmount("");
        setNumOfPeople("");
        setTipAmount('0.00');
        setTotalAmount('0.00');
        setCustomTipPercentage("")
    }

    return (
        <div className='middle-part'>
            <LeftSide
                billAmount={billAmount}
                numOfPeople={numOfPeople}
                setBillAmount={setBillAmount}
                setNumOfPeople={setNumOfPeople}
                customTipPercentage={customTipPercentage}
                setCustomTipPercentage={setCustomTipPercentage}
                onTipCalculated={calculateTip}
                onTotalCalculated={calculateTotal}
            />
            <RightSide tipAmount={tipAmount} totalAmount={totalAmount} onReset={resetValues} />
        </div>
    );
}
export default MiddlePart;
