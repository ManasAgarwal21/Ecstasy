const initialState = {
    updateState: {
        firstName: '',
        lastName: '',
        role: '',
        password: '',
        email: ''
    },
    loggedUser : {
        email: '',
        password: ''
    }
};

export const updateUser = (state = initialState, action) => {
    switch(action.type){
        case 'UPDATE_USER': return action.payload;
        default: return state;
    }
}

export const addLoggedUser = (state = initialState, action) => {
    switch(action.type){
        case 'LOGGED_USER': return action.payload;
        default: return state;
    }
}

export const getLoggedUser = ({loggedUser}) => {
    return loggedUser;
}

export const getData = ({updateState}) => {
    return updateState;
}