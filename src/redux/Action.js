export const loginUser = (user) => {
    return {
        type : "LOGIN_USER",
        payload : user,
    }
}

export const createUser = (user) => {
    return {
        type : "SIGN_UP_USER",
        payload : user,
    }
}

export const UpdateUser = (user) => {
    return {
        type : "UPDATE_USER",
        payload : user,
    }
}

export const logOutUser = (user) => {
    return {
        type : "LOGOUT_USER",
        payload : user,
    }
}