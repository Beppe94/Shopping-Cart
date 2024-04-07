import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: "womenClothes",
    initialState: {
       value: [],
       clotheObject: []
    },
    reducers: {
        addIndexClothes: (state, action) => {
            const indexToAdd = action.payload
            if(!state.value.includes(indexToAdd)) {
                state.value.push(action.payload);
            }
        },
        addClotheObject: (state, action) => {
            state.clotheObject.push(action.payload)
        }
    },
})

export const { addIndexClothes, addClotheObject } = productSlice.actions;


export default productSlice.reducer