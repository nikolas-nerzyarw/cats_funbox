import React from 'react';
import classes from './Title.module.css'

const Title = () => {
    return (
        <div className={classes.title}>
            <h1>Ты сегодня покормил кота?</h1>
        </div>
    );
};

export default Title;