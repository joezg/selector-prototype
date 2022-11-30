function Selector(props) {
    return (
        <div className="selector" onClick={props.onClick}>
            <h1>{props.selectorName}</h1>
            <p>{props.selectionName}</p>
        </div>
    );
}

export default Selector;
