const initialState = "New User";

export const updateName = (state = initialState, action) => {
    switch(action.type){
        case 'UPDATE_USER': return action.payload;
        default: return state;
    }
}

export const getData = (state) => {
    return state;
}