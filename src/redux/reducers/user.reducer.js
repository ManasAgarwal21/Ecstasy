import extend from 'lodash/extend';
export const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: ''
};

export const userReducer = (state = initialState, action) => {
    if(action.type === "UPDATE_USER"){
        return extend(state,action.payload);
    }
    return state;
}