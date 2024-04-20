import { combineReducers, configureStore } from "@reduxjs/toolkit";
import addIndexClothes from "./prouctSlice";
import addWomenClotheObject from "./prouctSlice";
import addMenClotheObject from "./prouctSlice";
import cartTotalProducts from "./prouctSlice";
import addJewelery from "./prouctSlice";



export default configureStore({
    reducer: {
        clothesIndexReducer: addIndexClothes,
        womenClothesReducer: addWomenClotheObject,
        menClothesReducer: addMenClotheObject,
        cartProductsReducer: cartTotalProducts,
        jeweleryReducer: addJewelery,
    },
})