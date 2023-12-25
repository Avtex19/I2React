import "./RightSide.css"
function RightSide(props) {
    const handleReset = () => {
        if(props.onReset){
            props.onReset();
        }
    }
    return <div className="right-side">
        <div className="right-side-box">
            <div className="without-submit-button">
            <div className="tip-amount-person">
                <label><h2>Tip Amount</h2>
                <p>/ person</p></label>
                <h1>${props.tipAmount} </h1>
            </div>
            <div className="total-amount-person">
                <label><h2>Total</h2>
                    <p>/ person</p></label>
                <h1>${props.totalAmount}</h1>
            </div>
            </div>
            <div className="reset-button">
                <button type="button" className="submit-btn" onClick={handleReset}>
                    RESET
                </button>
            </div>
        </div>
    </div>

}
export default RightSide;