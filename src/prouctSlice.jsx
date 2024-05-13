import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: "shop",
    initialState: {
       value: [],
       productObject: {womenClothes: [], menClothes: [], jewelery: [], techs: []},
       cartProducts: [],
       quantity: [],
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
        removeCartProducts: (state, action) => {
            const itemIndex = action.payload

            state.cartProducts = state.cartProducts.filter(item => item !== itemIndex)
            state.value = state.value.filter(item => item !== itemIndex)
        },
        addProductQuantity: (state, action) => {
            const quantityToAdd = action.payload;
            
            state.quantity.push(quantityToAdd);
        },
        removeProductQuantity: (state, action) => {
            const elementToRemove = action.payload;

            state.quantity = state.quantity.filter(element => element.index !== elementToRemove )
        },
        decreaseProductQuantity: (state, action) => {
            const itemToChange = action.payload;
            state.quantity = state.quantity.map(item => {
                if(item.index === itemToChange && item.quantity > 1) {
                    return {...item, quantity: item.quantity -1}
                }
                return item;
            })
        },
        changeProductQuantity: (state, action) => {
            const itemToChange = action.payload;
            state.quantity = state.quantity.map(item => {
                if(item.index === itemToChange) {
                    return {...item, quantity: item.quantity +1}
                }
                return item;
            })
        }
    },
})

export const { 
    addIndexClothes, 
    addWomenClotheObject,
    addMenClotheObject,
    cartTotalProducts,
    addJewelery,
    addTech,
    removeCartProducts,
    addProductQuantity,
    decreaseProductQuantity,
    changeProductQuantity,
    removeProductQuantity
} = productSlice.actions;


export default productSlice.reducer