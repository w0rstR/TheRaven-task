import ProductItem from "../ProductItem/ProductItem";
import s from "./ProductList.module.css"
import {useEffect, useState} from "react";
import React from 'react'
import productService from "../../services/product.service";
import {useDispatch, useSelector} from "react-redux";

export default function ProductList(){
    const {orderProducts} = useSelector(state => state["productReducer"]);
    const [products, setProduct] = useState()

    useEffect(   ()=>{
        const data =  productService.getAllProducts().then(value => setProduct(value))
    },[])

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