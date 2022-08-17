import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productsSlice";
import cartReducer from "../features/cartitems/cartSlice";

const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer
    },
});

export default store;