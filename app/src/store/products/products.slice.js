import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {act} from "react-dom/test-utils";


const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        orderProducts: [],
        count:0

    },
    reducers: {
        setProduct:(state,action)=>{
            if(state.orderProducts.length>0){
                state.orderProducts.forEach(item=>{
                    if(item.id == action.payload.item.id){
                        item.count++;
                        //console.log('if id ==')
                        //console.log(item)
                        //console.log(`item count: ${item.count}`)

                    }else{
                        //console.log('if id !=')
                        //console.log(newProduct)
                        state.orderProducts.push(Object.assign(item,{count:1}))
                    }
                })
            }else{
                //console.log('not have item')
                state.orderProducts.push(Object.assign(action.payload.item,{count:1}))
            }
            state.count++;
        }
    }


})
const productReducer = productSlice.reducer
export const {setProduct} = productSlice.actions
export default productReducer