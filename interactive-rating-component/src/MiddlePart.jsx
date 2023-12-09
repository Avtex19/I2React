import React, { useState } from 'react';
import HeaderAndText from './HeaderAndText';
import Numbers from './Numbers';
import SubmitButton from './SubmitButton';
import Result from './Result';
import './MiddlePart.css';

function MiddlePart() {
    const [chosenNumber, setChosenNumber] = useState(null);
    const [showResult, setShowResult] = useState(false);

    const handleRatingSubmit = () => {
        setShowResult(true);
    };

    return (
        <div className="middle-box">
            {/*if showResults is true, then appear result component, otherwise rest.*/}
            {showResult ? (
                <Result chosenNumber={chosenNumber}/>
            ) : (
                <>
                    <HeaderAndText />
                    <div className="btns">
                        <div className="middle-nums">
                            <Numbers number={1} chosenNumber={chosenNumber} setChosenNumber={setChosenNumber} />
                            <Numbers number={2} chosenNumber={chosenNumber} setChosenNumber={setChosenNumber} />
                            <Numbers number={3} chosenNumber={chosenNumber} setChosenNumber={setChosenNumber} />
                            <Numbers number={4} chosenNumber={chosenNumber} setChosenNumber={setChosenNumber} />
                            <Numbers number={5} chosenNumber={chosenNumber} setChosenNumber={setChosenNumber} />
                        </div>
                        <div className="middle-submit">
                            <SubmitButton onSubmit={handleRatingSubmit} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default MiddlePart;
