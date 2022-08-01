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

export const logOutUser = () => {
    return {
        type : "LOGOUT_USER",
    }
}

export const payment = (paymentMethod) => {
    return {
        type : "PAYMENT_METHOD",
        payload : paymentMethod,
    }
}

export const shippingAddress = (shippingAddress) => {
    return {
        type : "SAHIPPING_ADDRESS",
        payload : shippingAddress,
    }
}

export const clearCart = () => {
    return {
        type : "CLEAR_CART",
    }
}