import './App.css';
import Loader from './components/Loader';
import {useEffect, useState} from 'react';
import { changeProduct, changeProductOption, loadModel } from './connector';
import Configurator from './components/Configurator';

function App() {
  const [model, setModel] = useState(undefined);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({
    c1: {
      o1: "o1-1"
    }
  } /*ie. defaults */);
  
  useEffect(() => {

    //top level function of useEffect must not be async so I needed a wrapper here
    async function applyEffect() {
      const newModel = await loadModel();

      setModel(newModel);
    }

    applyEffect();

  }, []) //this useEffect handler is not called again unless props.modelName changes

  const handleOptionSelected = (productId, optionId, value) => {
    setSelectedOptions({
      ...selectedOptions,
      [productId]: {
        ...selectedOptions[productId],
        [optionId]: value
      }
    })

    changeProductOption(productId, optionId, value);
  }

  const handleProductSelected = productId => {
    setSelectedProductId(productId);
    changeProduct(productId);
  }

  return (
    <div className="App">
      {!!model ? <Configurator model={model} productId={selectedProductId} selectedOptions={selectedOptions} onProductSelected={handleProductSelected} onOptionSelected={handleOptionSelected} /> : <Loader />}
    </div>
  );
}

export default App;
