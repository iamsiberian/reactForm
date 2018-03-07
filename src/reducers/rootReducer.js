import {
    combineReducers
} from 'redux';

import registrationReducer from '../app/registration/reducer'
//import newsReducer from '../app/news/reducer'

const appReducer = combineReducers({
    registrationReducer/*,
    newsReducer*/
});

export default (state = {}, action) => {
    return appReducer(state, action)
}