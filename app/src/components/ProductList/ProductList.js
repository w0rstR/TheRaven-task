import ProductItem from "../ProductItem/ProductItem";
import s from "./ProductList.module.css"
import {useEffect, useState} from "react";
import React from 'react'
import productService from "../../services/product.service";

export default function ProductList(){
    const [products, setProduct] = useState([])

    useEffect(   ()=>{
        const data = productService.getAllProducts().then(value => setProduct(value))
    },[])

    return(
        <div className={s.wrap}>
            <div className={s.container}>
                {products ? products.map(item=> <ProductItem item={item} key={item.id} />) : null}
            </div>
        </div>
    )
}