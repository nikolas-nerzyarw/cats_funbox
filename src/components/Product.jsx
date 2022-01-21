import React from 'react';
import classes from './Product.module.css';

const Product = (props) => {
    //Переменные, принимающие пропсы (только для сокращения длины строк)
    let productSubtitle = props.product.productSubtitle;
    let mainName = props.product.productTitle.mainName;
    let compositionName = props.product.productTitle.compositionName;
    let feedback = props.product.productDescription.feedback;
    let unitsOfMeasurements = props.product.unitsOfMeasurements;
    let stringDefault = props.product.stringOfCondition.default.stringDefault;
    let linkDefault = props.product.stringOfCondition.default.linkDefault;
    let quantityPortion = props.product.productDescription.portion.quantityPortion;

    //Переменные, хранящие строки в зависимости от количества порций и подарков 
    let endingPortion;
    let endingPresent;

    //Переменные для хранения модификаторов стилей зависящих от состояния продукта
    let cardInsideOfCondition;
    let cardOfCondition;
    let subtitleEnter;
    let mainNameOfCondition;
    let compositionNameOfCondition;
    let circleOfCondition;
    let changeStringCondition;

    //Количество продукта в зависимости от веса порции и кол-ва порций 
    let quantity = props.product.weightPortion * quantityPortion;

    //Количество подарков в зависимости от количества порций
    let quantityPresent = parseInt(quantityPortion / 20);
    if (quantityPortion >= 10 && quantityPortion <= 20) {
        quantityPresent = 1;
    }

    //Окончание зависит от количества порций
    ( quantityPortion === 1 ) 
      ?   endingPortion = 'порция' 
    : ( 1 < quantityPortion < 5 ) 
      ?  endingPortion = 'порции' 
      : endingPortion = 'порций';
   
    //Окончание зависит от количества подарков
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

    //Проверяем состояние продукта, в зависимости от него добавляем стили элементам разметки 
    if (props.product.conditionProduct.condition ==='selected' ) {
        cardOfCondition = classes.cardSelected;
        circleOfCondition = classes.circleSelected;
        stringDefault = props.product.stringOfCondition.selected;
        linkDefault = '';
    }

    if ( props.product.conditionProduct.condition ==='selected' && props.product.conditionProduct.mouse === 'enter') {
        productSubtitle = "Котэ не одобряет?";
        subtitleEnter = classes.subtitleEnter;
        circleOfCondition = classes.circleSelected;
    }

    if (props.product.conditionProduct.condition ==='disabled' ) {
        cardOfCondition = classes.cardDisabled;
        mainNameOfCondition = classes.mainNameDisabled;
        compositionNameOfCondition = classes.compositionNameDisabled;
        circleOfCondition = classes.circleDisabled;
        stringDefault = props.product.stringOfCondition.disabled;
        linkDefault = '';
        changeStringCondition = classes.stringConditionDisabled;
        cardInsideOfCondition =classes.cardInsideDisabled;
    }

    return (
        <div className={classes.product}>
            <div onClick={() => props.click(props.product)} 
                 onMouseLeave={() => props.mouseLeave (props.product)} 
                 onTouchEnd={() => props.mouseLeave (props.product)}  
                 onMouseEnter={() => props.mouseEnter (props.product)}
                 onTouchMove={() => props.mouseEnter (props.product)}
                 className={classes.productCard + ' ' + cardOfCondition}>
                    <div className={classes.productCardInside + ' ' + cardInsideOfCondition}>
                        <span className={classes.productSubtitle + ' ' + subtitleEnter}>{productSubtitle}</span>
                        <span className={classes.mainName + ' ' + mainNameOfCondition}>{mainName}</span>
                        <span className={classes.compositionName + ' ' + compositionNameOfCondition}>{compositionName}</span>
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
            <div className={classes.stringCondition + ' ' + changeStringCondition}>
                <div><p>{stringDefault} 
                    <a onClick={() => props.click(props.product)} 
                       onMouseLeave={() => props.mouseLeave (props.product)} 
                       onTouchEnd={() => props.mouseLeave (props.product)}
                       onMouseEnter={() => props.mouseEnter (props.product)}
                       onTouchMove={() => props.mouseEnter (props.product)}> {linkDefault}</a></p>
                </div>
            </div>
            <div className={classes.circle + ' ' + circleOfCondition}>
                <span className={classes.quantity}>{quantity}</span>
                <span className={classes.unitsOfMeasurements}>{unitsOfMeasurements}</span>
            </div>
        </div>
    );
};

export default Product;