import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';


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
            // state.orderProducts.forEach(item=>{
            //     if(item.id == action.payload.id){
            //         item.count++;
            //     }
            // })
        },
        deleteProduct:(state,action)=>{
            const item = state.orderProducts[action.payload.item.id]
            item.count--;
            state.price -= action.payload.item.price
            if(!item.count) delete state.orderProducts[action.payload.item.id]
            // state.orderProducts.forEach((item,index)=>{
            //     if(item.id == action.payload.item.id){
            //         item.count--;
            //         if(item.count == 0){
            //             state.orderProducts.splice(index,index+1)
            //             state.count--;
            //         }
            //     }
            // })
        },
        setProduct:(state,{payload})=>{
            const currentItem = state.orderProducts[payload.item.id] || payload.item;
            state.orderProducts[payload.item.id] = { ...currentItem, count: currentItem.count + 1 };
            state.price += payload.item.price


            // const currentItem = { ...payload.item, count: payload.item.count + 1};
            // if(!currentItem) state.orderProducts[payload.item.id] = payload.item
            // state.orderProducts[payload.item.id]=currentItem;





            // const currentItem = state.orderProducts[payload.item.id]// if(currentItem){
            //     currentItem.count++;
            // }else{
            //     state.orderProducts[payload.item.id] = payload.item
            // }

            // if(state.orderProducts.length){
            //     const item = state.orderProducts.find(item => item.id == action.payload.item.id)
            //     if(item){
            //           state.orderProducts.forEach(product=>{
            //               if(product.id == action.payload.item.id){
            //                   product.count++;
            //               }
            //           })
            //     }else{
            //         state.orderProducts.push(Object.assign(action.payload.item,{count:1}))
            //         state.count++;
            //     }
            // }else{
            //     state.orderProducts.push(Object.assign(action.payload.item,{count:1}))
            //     state.count++;
            // }


        }
    }


})
const productReducer = productSlice.reducer
export const {setProduct,addProduct,deleteProduct} = productSlice.actions
export default productReducer