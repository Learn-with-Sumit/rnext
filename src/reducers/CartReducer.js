const initialState = {
    cartData: []
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                cartData: [...state.cartData, action.payload]
            }
            break;
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartData:state.cartData.filter(x=>x.id!=action.payload.id)
            }
            break;
        default:
            return state;
    }
}

export {
    initialState,
    cartReducer
}