import {combineReducers} from 'redux';
import {nameReducer, emailReducer} from "./inputreducer";

const rootReducer = combineReducers({
    inputName: nameReducer,
    inputEmail: emailReducer
});

export default rootReducer;
