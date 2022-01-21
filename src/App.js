import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import ProductsList from './components/ProductsList';
import data from './productsForCats.json';

function App() {
  
  const [productsListCatsFood, setProductsListCatsFood] = useState(data.forCats);

  //Обработчики событий устанавливающих состояние продукта
  const click = (product) => {
    product.conditionProduct.condition === 'disabled'
    ? product.conditionProduct.click = false :
    product.conditionProduct.click  === true
    ? setProductsListCatsFood([...productsListCatsFood], product.conditionProduct.click = false) 
    : setProductsListCatsFood([...productsListCatsFood], product.conditionProduct.click = true);
  }

  const mouseLeave = (product) => {
    setProductsListCatsFood([...productsListCatsFood], product.conditionProduct.mouse = 'leave');
    product.conditionProduct.condition === 'disabled'
    ? product.conditionProduct.condition = 'disabled' :
    product.conditionProduct.click  === true 
    ? setProductsListCatsFood([...productsListCatsFood], product.conditionProduct.condition = 'selected')
    : setProductsListCatsFood([...productsListCatsFood], product.conditionProduct.condition = 'default')
  }
  
  const mouseEnter = (product) => {
    setProductsListCatsFood([...productsListCatsFood], product.conditionProduct.mouse = 'enter');
  }


  return (
    <div className="App">
        <div className='content'>
          <Title></Title>
          <ProductsList click={click} mouseLeave ={mouseLeave } mouseEnter={mouseEnter} productsListCatsFood={productsListCatsFood}/>
        </div>
    </div>
  );
}

export default App;
