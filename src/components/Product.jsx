import React from 'react';
import classes from './Product.module.css';

const Product = (props) => {
    
    let productSubtitle = props.product.productSubtitle;
    let mainName = props.product.productTitle.mainName;
    let compositionName = props.product.productTitle.compositionName;
    let feedback = props.product.productDescription.feedback;
    let unitsOfMeasurements = props.product.weightIncircle.unitsOfMeasurements;
    let stringDefault = props.product.stringOfCondition.default.stringDefault;
    let linkDefault = props.product.stringOfCondition.default.linkDefault;

    let quantityPortion = props.product.productDescription.portion.quantityPortion;
    let quantityPresent = parseInt(quantityPortion / 20);
    let quantity = props.product.weightPortion * quantityPortion;
    let endingPortion;
    let endingPresent;

    let stylesSelectedAndEnter = classes.productSubtitle;
    let stylesFromCondition = classes.productCardDefault;
    let styleMainName = classes.mainName;
    let stylesCompositionName = classes.compositionName;
    let circle = classes.circleDefault;
    let stringCondition = classes.stringCondition;
    let productCardInside =classes.productCardInside;


    if (quantityPortion >= 10 && quantityPortion <= 20) {
        quantityPresent = 1;
    }

    if (quantityPortion === 1) {
        endingPortion = 'порция';
    }
    else if (quantityPortion === 2 || quantityPortion === 3 || quantityPortion === 4) {
        endingPortion = 'порции';
    }
    else {
        endingPortion = 'порций';
    }

    if (quantityPresent === 1) {
        endingPresent = 'мышь в подарок';
        quantityPresent = '';
    }
    else if (quantityPresent === 2 || quantityPresent === 3 || quantityPresent === 4) {
        endingPresent = 'мыши  в подарок';
    }
    else {
        endingPresent = 'мышей  в подарок';
    }

    if (props.product.conditionProduct.condition ==='selected' ) {
        stylesFromCondition = classes.productCardSelected;
        circle = classes.circleSelected;
        stringDefault = props.product.stringOfCondition.selected;
        linkDefault = '';
    }
    if ( props.product.conditionProduct.condition ==='selected' && props.product.conditionProduct.mouse === 'enter') {
        productSubtitle = "Котэ не одобряет?";
        stylesSelectedAndEnter = classes.productSubtitleEnter;
        stylesFromCondition = classes.productCardSelected;
        circle = classes.circleSelected;
    }

    if (props.product.conditionProduct.condition ==='disabled' ) {
        stylesFromCondition = classes.productCardDisabled;
        styleMainName = classes.mainNameDisabled;
        stylesCompositionName = classes.compositionNameDisabled;
        circle = classes.circleDisabled;
        stringDefault = props.product.stringOfCondition.disabled;
        linkDefault = '';
        stringCondition = classes.stringConditionDisabled;
        productCardInside =classes.productCardInsideDisabled;
    }
       
    return (
        <div className={classes.product}>
            <div 
                onClick={() => props.click(props.product)} 
                onMouseLeave={() => props.mouseLeave (props.product)} 
                onTouchEnd={() => props.mouseLeave (props.product)}  
                onMouseEnter={() => props.mouseEnter (props.product)}
                onTouchMove={() => props.mouseEnter (props.product)}
                 className={stylesFromCondition}>
                <div className={productCardInside}>
                    <span className={stylesSelectedAndEnter}>{productSubtitle} </span>
                    <span className={styleMainName}>{mainName}</span>
                    <span className={stylesCompositionName}>{compositionName}</span>
                    <div className={classes.portion}>
                        <div className={classes.quantityPortion}>{quantityPortion} </div>
                        <div className={classes.endingPortion}>{endingPortion}</div>
                    </div>
                    <div className={classes.present}>
                        <div className={classes.quantityPresent}>{quantityPresent}</div>
                        <div className={classes.endingPresent}>{endingPresent}</div>  
                    </div>
                    <span className={classes.feedback}>{feedback}</span>
                </div>
            </div>
            <div className={stringCondition}>
                <div><p>{stringDefault} 
                    <a 
                    onClick={() => props.click(props.product)} 
                    onMouseLeave={() => props.mouseLeave (props.product)} 
                    onTouchEnd={() => props.mouseLeave (props.product)}
                    onMouseEnter={() => props.mouseEnter (props.product)}
                    onTouchMove={() => props.mouseEnter (props.product)} >{linkDefault}</a></p>
                </div>
            </div>
            <div className={circle}>
                <span className={classes.quantity}>{quantity}</span>
                <span className={classes.unitsOfMeasurements}>{unitsOfMeasurements}</span>
            </div>
        </div>
    );
};

export default Product;