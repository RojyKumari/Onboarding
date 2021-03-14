import React from 'react';
import {withRouter} from 'react-router-dom';
import PersonalInfo from './PersonalInfo';
import BusinessInfo from './BusinessInfo';
import CardInfo from './CardInfo';

export const Review = (props)=>{

    const back = ()=>{
        props.history.push('/card');
    }

    const submit = ()=>{
        console.log('Submited')
    }

    return (
        <>
        <PersonalInfo isReview={true}/>
        <BusinessInfo isReview={true}/>
        <CardInfo isReview={true}/>
        <button onClick={back}>Back</button>
        <button onClick={submit}>Submit application</button>
        </>
    )
}

export default withRouter(Review);