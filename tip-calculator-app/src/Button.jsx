function Button(props){
    return <div>
        <button type="button" onClick={props.onClick}>{props.value}</button>
    </div>

}
export default Button;