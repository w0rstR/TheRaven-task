import ProductItem from "../ProductItem/ProductItem";
import s from "./ProductList.module.css"
import {useEffect, useState} from "react";
import React from 'react'

import {useDispatch, useSelector} from "react-redux";
//import db from '../../services/products.database.service'


export default function ProductList(){
    const {orderProducts} = useSelector(state => state["productReducer"]);
    const [products, setProduct] = useState([])

    // useEffect(   ()=>{
    //     db.collection('products').get().then(value => console.log(value))
    // },[])

    useEffect(()=>{
        if(orderProducts.length>0){
            console.log(orderProducts)
        }
    },[orderProducts])

    return(
        <div className={s.wrap}>
            <div className={s.container}>
                {products ? products.map(item=> <ProductItem item={item} key={item.id} />) : null}
            </div>
        </div>
    )
}