import extend from 'lodash/extend';

const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: ''
};

export const updateReducer = (state = initialState, action) => {
    if(action.type === "UPDATE_USER"){
        return extend(state, action.payload);
    }
    return state;
}

export const getData = (updateUser = initialState) => {
    return updateUser;
}