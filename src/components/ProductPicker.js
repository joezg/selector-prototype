function ProductPicker(props) {
    return (
        <div className="product-picker">
            <h1>Tip</h1>
            <button onClick={props.onBack}>Natrag</button>
            { props.availableProducts.map(p => {
                return <button key={p} onClick={() => props.onProductSelected(p)}>{props.products[p].name}</button>
            }) }
        </div>
    );
}

export default ProductPicker;
