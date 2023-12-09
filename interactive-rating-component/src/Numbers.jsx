import './Numbers.css';
export const Numbers = props => {
    return (
        <button
            className={props.chosenNumber === props.number ? "clicked" : ""}
            onClick={() => {
                props.setChosenNumber(prev => (prev === props.number ? -1 : props.number)); //prev is a previous state of the chosen number. If previous state
                // of the chosen number is equal to the current number then we set the new state to -1 (unselecting the number, indicating no selection)
                // otherwise,Set the new state to the current number (props.number), effectively selecting it.
            }}
        >
            {props.number}
        </button>
    );
};
export default Numbers;