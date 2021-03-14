import {combineReducers} from 'redux';
import {setItem} from '../Utils/webStorage';

const initialState = {};

const personalInfo = (state=initialState, action) => {

    switch(action.type){
        case 'UpdatePersonalInfo':
        const updatedState = {
            ...state,
            ...action.payload
        };
        setItem('personalInfo', updatedState);
        return updatedState;
        default:
        return state;
    }

}

const businessInfo = (state=initialState, action) => {

    switch(action.type){
        case 'UpdateBusinessInfo':
        const updatedState = {
            ...state,
            ...action.payload
        };
        setItem('businessInfo', updatedState);
        return updatedState;
        default:
        return state;
    }

}

const cardInfo = (state=initialState, action) => {

    switch(action.type){
        case 'UpdateCardInfo':
        const updatedState = {
            ...state,
            ...action.payload
        };
        setItem('cardInfo', updatedState);
        return updatedState;
        default:
        return state;
    }

}

export const reducers = combineReducers({
    personalInfo,
    businessInfo,
    cardInfo
})