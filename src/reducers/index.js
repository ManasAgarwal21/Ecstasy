const initialState = {
    updateState: {
        firstName: '',
        lastName: '',
        role: '',
        password: '',
        email: ''
    }
};

export const updateUser = (state = initialState, action) => {
    if(action.type === "UPDATE_USER"){
        return action.payload;
    }
    return state;
}

export const getData = (state = initialState) => {
    return state;
}