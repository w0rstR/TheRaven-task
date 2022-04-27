import { createSlice} from '@reduxjs/toolkit';


const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        orderProducts: {},
        price:0

    },
    reducers: {
        addProduct:(state,action)=>{
            state.orderProducts[action.payload.item.id].count++
            state.price += action.payload.item.price
        },
        deleteProduct:(state,action)=>{
            const item = state.orderProducts[action.payload.item.id]
            item.count--;
            state.price -= action.payload.item.price
            if(!item.count) delete state.orderProducts[action.payload.item.id]
        },
        setProduct:(state,{payload})=>{
            const currentItem = state.orderProducts[payload.item.id] || payload.item;
            state.orderProducts[payload.item.id] = { ...currentItem, count: currentItem.count + 1 };
            state.price += payload.item.price
        },
        resetOrder:(state,payload)=>{
                state.orderProducts={}
                state.price = 0
        }
    }


})
const productReducer = productSlice.reducer
export const {setProduct,addProduct,deleteProduct,resetOrder} = productSlice.actions
export default productReducer