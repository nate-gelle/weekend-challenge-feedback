import combineReducers from 'redux';

const otherReducer = (state='', action) => {
    // return state with needed changes
}

export default combineReducers({
    feedbackReducer,
    otherReducer,
    anotherReducer
})

// storeInstance stays in index.js and this export is imported there