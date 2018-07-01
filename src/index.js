import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'; // Makes development easier

// This will increase or decrease a number, starts at 0 (default)
// Whatever we return, is passed in as 'state' on the next function call
const feelingReducer = (state = 0, action) => {
    // Filter down to specific action types
    if(action.type === 'FEELING') {
        // return the new state
        return action.payload;
        // nothing after a return is called
    }
    return state; // return the current state if no changes were made
}

const understandingReducer = (state = 0, action) => {
    if(action.type === 'UNDERSTANDING') {
        return action.payload; // this is the array of colors from the server
    }
    return state;
}

const supportReducer = (state = 0, action) => {
    if(action.type === 'SUPPORT') {
        return action.payload; // this is the array of colors from the server
    }
    return state;
}

const commentReducer = (state = '', action) => {
    if(action.type === 'COMMENT') {
        return action.payload; // this is the array of colors from the server
    }
    return state;
}

const storeInstance = createStore(
    // This is a reducer. It's called when the page loads or
    // dispatch is called.
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentReducer,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
