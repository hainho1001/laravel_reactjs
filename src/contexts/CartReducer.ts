


const Storage = (cartItems: any) => {
    localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems: []));
}

export const sumItems = (cartItems: any) => {
    Storage(cartItems);
    return {};
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
                cartItems: [...state.cartItems]
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
        default:
            break;
    }
}