import "./LeftSide.css";
import DollarIcon from "./images/icon-dollar.svg";
import Button from "./Button";
import PersonIcon from "./images/icon-person.svg";

function LeftSide(props) {
    const calculateTipAndTotal = (tipPercentage) => {
        if (!props.numOfPeople) {
            alert("Number of people is required.");
            return;
        }
        const tipAmount = (parseFloat(props.billAmount) * tipPercentage) / (100 * props.numOfPeople);
        console.log('Tip Amount:', tipAmount);
        props.onTipCalculated(tipAmount);

        // Calculate total amount as well
        const total = (parseFloat(props.billAmount) / parseFloat(props.numOfPeople)) + tipAmount;
        console.log('Total Amount:', total);
        props.onTotalCalculated(total);
    };

    const handleCustomTipChange = (e) => {
        const customTipPercentage = parseFloat(e.target.value);
        props.setCustomTipPercentage(customTipPercentage);

        // Calculate tips and totals
        const tipAmount = (parseFloat(props.billAmount) * customTipPercentage) / (100 * props.numOfPeople);
        console.log('Tip Amount:', tipAmount);
        props.onTipCalculated(tipAmount);

        const total = (parseFloat(props.billAmount) / parseFloat(props.numOfPeople)) + tipAmount;
        console.log('Total Amount:', total);
        props.onTotalCalculated(total);
    };

    return (
        <div className="left-side">
            <div className="bill-part">
                <label>Bill</label>
                <div className="bill-input-image">
                    <input
                        className="amount-input"
                        type="number"
                        placeholder="0"
                        value={props.billAmount}
                        onChange={(e) => props.setBillAmount(e.target.value)}
                    />
                    <img src={DollarIcon} alt="Not Found" className="dollar-icon" />
                </div>
            </div>

            <div className="tip-part">
                <label>Select Tip %</label>
                <div className="buttons-and-inputs">
                    <div className="first-row">
                        <Button value={"5%"} onClick={() => calculateTipAndTotal(5)} />
                        <Button value={"10%"} onClick={() => calculateTipAndTotal(10)} />
                        <Button value={"15%"} onClick={() => calculateTipAndTotal(15)} />
                    </div>
                    <div className="second-row">
                        <Button value={"25%"} onClick={() => calculateTipAndTotal(25)} />
                        <Button value={"50%"} onClick={() => calculateTipAndTotal(50)} />
                        <div>
                            <input
                                className="amount-tip"
                                type="number"
                                placeholder="Custom"
                                min={0}
                                value={props.customTipPercentage}
                                onChange={handleCustomTipChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="people-part">
                <div className="people-label-input">
                    <label>Number of people</label>
                    {props.numOfPeople === "0" && <p> can't be zero </p>}
                </div>
                <div className="people-icon">
                    <input
                        className="people-input"
                        type="number"
                        placeholder="0"
                        min={0}
                        required={true}
                        value={props.numOfPeople}
                        onChange={(e) => props.setNumOfPeople(e.target.value)}
                        style={
                            props.numOfPeople === "0"
                                ? { outline: "1px solid red" }
                                : { outline: "initial" }
                        }
                    />
                    <img src={PersonIcon} alt="Not Found" className="person-icon" />
                </div>
            </div>
        </div>
    );
}

export default LeftSide;
