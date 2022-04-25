import {configureStore} from '@reduxjs/toolkit'

import productReducer from "./products/products.slice";


const store = configureStore({
    reducer: {
        productReducer: productReducer
    }
})

export default store