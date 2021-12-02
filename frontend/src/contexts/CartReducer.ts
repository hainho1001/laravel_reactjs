


const Storage = (cartItems: any) => {
    localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems: []));
}

export const sumItems = (cartItems: any) => {
    Storage(cartItems);
    let itemCount = cartItems.reduce((total: any, product: any) => total + product.quantity, 0);
    let total = cartItems.reduce((total: any, product: any) => total + product.price * product.quantity, 0).toFixed(2);
    return { itemCount, total }
}

export const CartReducer = (state: any, action: any) => {
    switch (action.type) {
        case "ADD_CART":
            if(!state.cartItems[state.cartItems.findIndex((item: any) => item.name === action.payload.name)]){
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems],
                checkout: false,
            }
        case "INCREASE":
            state.cartItems[state.cartItems.findIndex((item: any) => item.name === action.payload.name)].quantity++
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case "DECREASE":
            state.cartItems[state.cartItems.findIndex((item: any) => item.name === action.payload.name)].quantity--
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                ...sumItems(state.cartItems.filter((item: any) => item.name !== action.payload.name)),
                cartItems: [...state.cartItems.filter((item: any) => item.name !== action.payload.name)]
            }
        case "CLEAR_ITEM":
            return {
                ...sumItems([]),
                cartItems: [],
            }
        case "CHECKOUT":
            return {
                ...sumItems([]),
                cartItems: [],
                checkout: true,
            }
        default:
            return state
    }
}