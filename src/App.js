import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import ProductsList from './components/ProductsList';

function App() {

  const[productsListCatsFood, setProductsListCatsFood] = useState([
    { id: 1, productType:'fuaGra', background: '', img: '../img/cat.png', productSubtitle: 'Сказочное заморское яство', productTitle: {mainName: 'Нямушка', compositionName: 'с фуа-гра' }, productDescription: {portion: {quantityPortion: '10', endingPortion: ''}, present: {quantityMouse:'1',  endingMouse: ''}, feedback:''}, circle: '', weightPortion: '0.05', weightIncircle: {quantity: '', unitsOfMeasurements:'кг'}, conditionProduct: {condition: 'default', click: false, mouse: 'none'}, stringOfCondition: {default: {stringDefault: 'Чего сидишь? Порадуй котэ, ', linkDefault: 'купи.'}, selected:'Печень утки разварная с артишоками.', disabled: 'Печалька, с фуа-гра закончился.'} },
    { id: 2,productType:'fish', background: '', img: '../img/cat.png', productSubtitle: 'Сказочное заморское яство', productTitle: {mainName: 'Нямушка', compositionName: 'с рыбой' }, productDescription: {portion: {quantityPortion: '40', endingPortion: ''}, present: {quantityMouse: '2',  endingMouse: ''}, feedback:''}, circle: '', weightPortion: '0.05',  weightIncircle: {quantity: '', unitsOfMeasurements:'кг'}, conditionProduct: {condition: 'default', click: false, mouse: 'none'}, stringOfCondition: {default: {stringDefault: 'Чего сидишь? Порадуй котэ, ', linkDefault: 'купи.'}, selected:'Головы щучьи с чесноком да свежайшая сёмгушка.', disabled: 'Печалька, с рыбой закончился.'} },
    { id: 3,productType:'chicken', background: '', img: '../img/cat.png', productSubtitle: 'Сказочное заморское яство', productTitle: {mainName: 'Нямушка', compositionName: 'с курой' }, productDescription: {portion: {quantityPortion: '100', endingPortion: ''}, present: {quantityMouse:'5',  endingMouse: ''}, feedback: 'заказчик доволен'}, circle: '',weightPortion: '0.05',  weightIncircle: {quantity: '', unitsOfMeasurements:'кг'},conditionProduct: {condition: 'disabled', click: false, mouse: 'none'}, stringOfCondition: {default: {stringDefault: 'Чего сидишь? Порадуй котэ, ', linkDefault: 'купи.'}, selected:'Филе из цыплят с трюфелями в бульоне.', disabled: 'Печалька, с курой закончился.' } }
  ]);

  const click = (product) => {
    product.conditionProduct.condition === 'disabled'
    ? product.conditionProduct.click = false :
    product.conditionProduct.click  === true 
    ? setProductsListCatsFood([...productsListCatsFood], console.log(product.conditionProduct.click = false)) 
    : setProductsListCatsFood([...productsListCatsFood], console.log(product.conditionProduct.click = true));
  }

  const mouseLeave = (product) => {
    setProductsListCatsFood([...productsListCatsFood], console.log(product.conditionProduct.mouse = 'leave'));
    product.conditionProduct.condition === 'disabled'
    ? product.conditionProduct.condition = 'disabled' :
    product.conditionProduct.click  === true 
    ? setProductsListCatsFood([...productsListCatsFood], console.log(product.conditionProduct.condition = 'selected'))
    : setProductsListCatsFood([...productsListCatsFood], console.log(product.conditionProduct.condition = 'default'))
  }
  
  const mouseEnter = (product) => {
    setProductsListCatsFood([...productsListCatsFood], console.log(product.conditionProduct.mouse = 'enter'));
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