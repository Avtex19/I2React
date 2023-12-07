import HeaderAndText from "./HeaderAndText";
import "./MiddlePart.css";
import Numbers from "./Numbers";
import SubmitButton from "./SubmitButton";
import { useState } from "react";

function MiddlePart() {
    const [chosenNumber, setChosenNumber] = useState(1);
    

  return (
    <div className="middle-box">
      <HeaderAndText />
      <div className="btns">
      <div className="middle-nums">
          <Numbers number={1} chosenNumber={chosenNumber} setChosenNumber={setChosenNumber}/>
          <Numbers number={2} chosenNumber={chosenNumber} setChosenNumber={setChosenNumber}/>
          <Numbers number={3} chosenNumber={chosenNumber} setChosenNumber={setChosenNumber} />
          <Numbers number={4} chosenNumber={chosenNumber} setChosenNumber={setChosenNumber}/>
          <Numbers number={5} chosenNumber={chosenNumber} setChosenNumber={setChosenNumber}/>
      </div>
      <div className="middle-submit">
        <SubmitButton/>
      </div>
      </div>
    </div>
  );
}

export default MiddlePart;
