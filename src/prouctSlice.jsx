import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: "shop",
    initialState: {
       value: [],
       productObject: {womenClothes: [], menClothes: [], jewelery: [], techs: []},
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
            if(!state.productObject.womenClothes.some(item => item.id === objectToAdd.id)) {
                state.productObject.womenClothes.push(objectToAdd);
            }
        },
        addMenClotheObject: (state, action) => {
            const objectToAdd = action.payload
            if(!state.productObject.menClothes.some(item => item.id === objectToAdd.id)) {
                state.productObject.menClothes.push(objectToAdd);
            }
        },
        addJewelery: (state, action) => {
            const objectToAdd = action.payload;
            if(!state.productObject.jewelery.some(item => item.id === objectToAdd.id)) {
                state.productObject.jewelery.push(objectToAdd);
            }
        },
        addTech: (state, action) => {
            const objectToAdd = action.payload;
            if(!state.productObject.techs.some(item => item.id === objectToAdd.id)) {
                state.productObject.techs.push(objectToAdd);
            }
        },
        cartTotalProducts: (state, action) => {
            state.cartProducts.push(action.payload)
        },
    },
})

export const { 
    addIndexClothes, 
    addWomenClotheObject, 
    addMenClotheObject, 
    cartTotalProducts, 
    addJewelery, 
    addTech } = productSlice.actions;


export default productSlice.reducer