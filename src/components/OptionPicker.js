function OptionPicker(props) {
    return (
        <div className="option-picker">
            <h1>Tip</h1>
            <button onClick={props.onBack}>Natrag</button>
            { props.values.map(v => {
                return <button key={v.id} onClick={() => props.onOptionSelected(v)}>{v.name}</button>
            }) }
        </div>
    );
}

export default OptionPicker;
