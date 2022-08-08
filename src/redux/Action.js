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

export const shippingAddress = (country, address, postalCode, phone) => {
    return {
        type : "SAHIPPING_ADDRESS",
        payload : { country, address, postalCode, phone } ,
    }
}

export const AddToCart = (item, quantity) => {
    return {
        type : "ADD_TO_CART",
        payload : { ...item, quantity}
    }
}

export const removeToCart = (item) => {
    return {
        type : "REMOVE_TO_CART",
        payload : item,
    }
}

export const clearCart = () => {
    return {
        type : "CLEAR_CART",
    }
}