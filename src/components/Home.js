import React from 'react';
import { Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getData} from './../redux/reducers';

const Home = ({location}) => {
    const {updateReducer} = useSelector(getData);
    if(!location.state){
        return (
            <Redirect to="/signin"/>
        )
    }
    return(
        <div>
            {'Hello' +
            (updateReducer.firstName === "") ? 
            (updateReducer.email.substring(0, 
                updateReducer.email.indexOf("@"))) :
            (updateReducer.firstName) +
            ', Welcome to our e-commerce website.'}
        </div>

    )
}

export default Home;