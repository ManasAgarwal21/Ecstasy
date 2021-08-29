import React from 'react';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '8px 16px',
        display: 'block',
        overflow: 'scroll',
        boxShadow: '0px 0px 8px -4px rgba(0,0,0,0.5)',
        '&::-webkit-scrollbar':{
            display: 'none'
        }
    },
    list: {
        display: 'inline-flex'
    },
    button: {
        margin: theme.spacing(1),
        backgroundColor: 'rgba(0,0,0,0)',//'#4169e1'
    },
    buttonColoured : {
        margin: theme.spacing(1),
        backgroundColor: 'rgb(65, 105, 223)',
        color : '#ffffff',
        '&:hover': {
            margin: theme.spacing(1),
            backgroundColor: 'rgb(65, 105, 223)',
            color : '#ffffff',
        }
    }
}))

const listItems = ['Men', 'Women', 'Health', 
    'Mobiles', 'Jewellery', 'Kids', 
    'Electronics', 'Furniture', 'Shoes', 'Books'];

export default function Categories(){
    const classNames = useStyles();

    const handleClick = event => {
        const target = (event.target.tagName === 'BUTTON') ? 
            event.target : event.target.offsetParent;
        if(target.tagName === 'BUTTON'){
            switch(target.classList.contains(classNames.button)){
                case true : 
                        target.classList.add(classNames.buttonColoured);
                        target.classList.remove(classNames.button)
                    break;
                case false : 
                        target.classList.add(classNames.button);
                        target.classList.remove(classNames.buttonColoured)
                    break;
                default: return;
            }
        }
    }

    return (
        <div className={classNames.root}>
            <ul className={classNames.list}>
                {listItems.map(item => {
                    return (
                        <Button variant="contained" 
                            className={classNames.button}
                            onClick={handleClick}>
                            {item}
                        </Button>
                    )
                })}
            </ul>
        </div>
    )
}