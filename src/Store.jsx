import { configureStore } from "@reduxjs/toolkit";
import addIndexClothes from "./prouctSlice";
import addWomenClotheObject from "./prouctSlice";
import addMenClotheObject from "./prouctSlice";
import cartTotalProducts from "./prouctSlice";
import addJewelery from "./prouctSlice";
import addTech from "./prouctSlice";
import removeCartProducts from "./prouctSlice";
import addProductQuantity from "./prouctSlice";
import removeProductQuantity from "./prouctSlice";



export default configureStore({
    reducer: {
        clothesIndexReducer: addIndexClothes,
        womenClothesReducer: addWomenClotheObject,
        menClothesReducer: addMenClotheObject,
        cartProductsReducer: cartTotalProducts,
        jeweleryReducer: addJewelery,
        techReducer: addTech,
        removeProductReducer: removeCartProducts,
        amountOfItemsReducer: addProductQuantity,
        removeProductQuantityReducer: removeProductQuantity,

    },
})