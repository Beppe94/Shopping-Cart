import { configureStore } from "@reduxjs/toolkit";
import addIndexClothes from "./prouctSlice";
import addClotheObject from "./prouctSlice";
import cartTotalProducts from "./prouctSlice";

export default configureStore({
    reducer: {
        shop: addIndexClothes,
        shop: addClotheObject,
        shop: cartTotalProducts
    },
})