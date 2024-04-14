import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: "shop",
    initialState: {
       value: [],
       clotheObject: {womenClothes: [], menClothes: []},
       cartProducts: [],
    },
    reducers: {
        addIndexClothes: (state, action) => {
            const indexToAdd = action.payload
            if(!state.value.includes(indexToAdd)) {
                state.value.push(action.payload);
            }
        },
        addWomenClotheObject: (state, action) => {
            const objectToAdd = action.payload
            if(!state.clotheObject.womenClothes.some(item => item.id === objectToAdd.id)) {
                state.clotheObject.womenClothes.push(objectToAdd);
            }
        },
        addMenClotheObject: (state, action) => {
            const objectToAdd = action.payload
            if(!state.clotheObject.menClothes.some(item => item.id === objectToAdd.id)) {
                state.clotheObject.menClothes.push(objectToAdd);
            }
        },
        cartTotalProducts: (state, action) => {
            state.cartProducts.push(action.payload)
        },
    },
})

export const { addIndexClothes, addWomenClotheObject, addMenClotheObject, cartTotalProducts } = productSlice.actions;


export default productSlice.reducer