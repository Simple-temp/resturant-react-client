import { combineReducers } from "redux"

const cart = {

    userInfo: localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null
    ,
    cart: {
        cartItem: localStorage.getItem("cartItem")
            ? JSON.parse(localStorage.getItem("cartItem"))
            : [],
        paymentMethod: localStorage.getItem("paymentMethod")
            ? localStorage.getItem("paymentMethod")
            : "",
        shippingAddress: localStorage.getItem("shippingAddress")
            ? JSON.parse(localStorage.getItem("shippingAddress"))
            : {},
    }

}

const handleCart = (state = cart, action) => {

    switch (action.type) {
        case "SIGN_UP_USER":
            return { ...state, userInfo: action.payload }
        case "LOGIN_USER":
            return { ...state, userInfo: action.payload }
        case "UPDATE_USER":
            return { ...state, userInfo: action.payload }
        case "ADD_TO_CART":
            const newItem = action.payload
            const existItem = state.cart.cartItem.find(item => item._id === newItem._id)
            const cartItem = existItem
                ? state.cart.cartItem.map(item => item._id === existItem._id ? newItem : item)
                : [...state.cart.cartItem, newItem]
            localStorage.setItem("cartItem", JSON.stringify(cartItem))
            return { ...state, cart: { ...state.cart, cartItem } }
        case "REMOVE_TO_CART":
            {
                const cartItem = state.cart.cartItem.filter(item => item._id !== action.payload._id)
                localStorage.setItem("cartItem", JSON.stringify(cartItem))
                return { ...state, cart: { ...state.cart, cartItem } }
            }
        case "CLEAR_CART":
            return { ...state, cart: { ...state.cart, cartItem: [] } }
        case "PAYMENT_METHOD":
            return { ...state, cart: { ...state.cart, paymentMethod: action.payload } }
        case "SAHIPPING_ADDRESS":
            return { ...state, cart: { ...state.cart, shippingAddress: action.payload } }
        case "LOGOUT_USER":
            return { ...state, userInfo: null, cart: { cartItem: [], paymentMethod: "", shippingAddress: {} } }
        default:
            return state
    }

}

const rootReducer = combineReducers({
    handleCart,
})

export default rootReducer;