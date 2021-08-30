export const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: ''
};

export const userReducer = (state = initialState, action) => {
    if(action.type === "UPDATE_USER"){
        return {...state,email:action.payload.email,password:action.payload.password};
    }
    return state;
}