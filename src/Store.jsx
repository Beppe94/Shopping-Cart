import { configureStore } from "@reduxjs/toolkit";
import   addIndexClothes from "./prouctSlice";
import  addClotheObject  from "./prouctSlice";

export default configureStore({
    reducer: {
        womenClothes: addIndexClothes,
        womenClothes: addClotheObject,
    },
})