import * as types from './actionTypes';

const initialState = {
    user: {
        firstName: 'Unregistered',
        lastName: 'User'
    }
};

export default (state = initialState, action) => {
    switch(action.type) {
        case types.LOGIN: {
            return {
                ...state,
                user: {
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName
                }
            }
        }
        default: {
            return state;
        }
    }
};