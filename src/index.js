import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feelingReducer = (state = 0, action) => {
    if(action.type === 'FEELING') {
        return action.payload;
    }
    return state;
}

const understandingReducer = (state = 0, action) => {
    if(action.type === 'UNDERSTANDING') {
        return action.payload;
    }
    return state;
}

const supportReducer = (state = 0, action) => {
    if(action.type === 'SUPPORT') {
        return action.payload;
    }
    return state;
}

const commentReducer = (state = '', action) => {
    if(action.type === 'COMMENT') {
        return action.payload;
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
