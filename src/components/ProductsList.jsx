import React from 'react';
import Product from './Product';
import classes from './ProductList.module.css';

const ProductsList = ({productsListCatsFood, click, mouseLeave, mouseEnter}) => {
    
    return (
        <div className={classes.productList}>
           {productsListCatsFood.map((product, index) => 
                <Product click = {click} mouseLeave ={mouseLeave } mouseEnter={mouseEnter} number = {index + 1} product = {product} key = {product.id}/>
        )}
        </div>
    );
};

export default ProductsList;