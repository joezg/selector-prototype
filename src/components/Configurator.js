import { useState } from "react";
import OptionPicker from "./OptionPicker";
import ProductPicker from "./ProductPicker";
import Selector from "./Selector";

function Configurator(props) {
    const selectorName = props.productId || "Product"
    const selectionName = props.productId || "Please select a product"

    const [pickingProduct, setPickingProduct] = useState(false);
    const [pickingOptionId, setPickingOptionId] = useState(null);

    const handleClickProduct = () => {
        setPickingProduct(true);
    }

    const handleBackProduct = () => {
        setPickingProduct(false)
    }

    const handleProductSelected = (productId) => {
        props.onProductSelected(productId);
        setPickingProduct(false);
    }

    const handleBackOption = () => {
        setPickingOptionId(null);
    }

    const handleOptionSelected = (value) => {
        props.onOptionSelected(props.productId, pickingOptionId, value.id);
        setPickingOptionId(null);
    }

    return (
        <div className="configurator">
            {pickingProduct ? <ProductPicker onBack={handleBackProduct} onProductSelected={handleProductSelected} availableProducts={props.model.availableProducts} products={props.model.products} /> : null}
            {pickingOptionId ? <OptionPicker onBack={handleBackOption} onOptionSelected={handleOptionSelected} values={props.model.options[pickingOptionId].values} /> : null}


            {!pickingProduct && pickingOptionId === null ?
                <div>
                    <Selector selectorName={selectorName} selectionName={selectionName} onClick={handleClickProduct}></Selector>
                    {props.productId ? 
                        props.model.products[props.productId].options.map( o => {
                            const selectionName = props.selectedOptions[props.productId] ? props.selectedOptions[props.productId][o] : "";
                            return <Selector key={o} selectorName={props.model.options[o].name} selectionName={selectionName} onClick={() => setPickingOptionId(o)}/>
                        })
                        : null}
                </div>
                : null
            }
        </div>
    );
}

export default Configurator;
