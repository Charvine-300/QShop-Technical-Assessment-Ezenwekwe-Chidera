import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            state.cartItems.push(action.payload);
        },
        remove: (state, action) => {
            state.cartItems = state.cartItems.filter(data => data.id !== action.payload.id);
        },
    }
});

export default cartSlice.reducer;
export const { add, remove } = cartSlice.actions;