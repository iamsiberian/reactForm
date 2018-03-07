import * as types from './actionTypes';

export function logIn(user) {
    return (dispatch) => {
        dispatch({
            type: types.LOGIN,
            payload: {
                firstName: user.firstName,
                lastName: user.lastName
            }
        })
    }
}