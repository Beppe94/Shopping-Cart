import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: "womenClothes",
    initialState: {
       value: [],
       clotheObject: [],
       cartProducts: [],
    },
    reducers: {
        addIndexClothes: (state, action) => {
            const indexToAdd = action.payload
            if(!state.value.includes(indexToAdd)) {
                state.value.push(action.payload);
            }
        },
        addClotheObject: (state, action) => {
            const objToAdd = action.payload;
            if(!state.clotheObject.includes(objToAdd)) {
                state.clotheObject.push(action.payload);
            }
        },
        cartTotalProducts: (state, action) => {
            state.cartProducts.push(action.payload)
        },
    },
})

export const { addIndexClothes, addClotheObject, cartTotalProducts } = productSlice.actions;


export default productSlice.reducer