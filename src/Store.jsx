import { configureStore } from "@reduxjs/toolkit";
import addIndexClothes from "./prouctSlice";
import addWomenClotheObject from "./prouctSlice";
import addMenClotheObject from "./prouctSlice";
import cartTotalProducts from "./prouctSlice";

export default configureStore({
    reducer: {
        shop: addIndexClothes,
        shop: addWomenClotheObject,
        shop: addMenClotheObject,
        shop: cartTotalProducts
    },
})