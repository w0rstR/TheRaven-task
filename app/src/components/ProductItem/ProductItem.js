import s from "./ProductItem.module.css"
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setProduct} from "../../store/products/products.slice";
export default function ProductItem({item}){
    const {product_img, product_title,product_about} = item;
    const dispatch = useDispatch();


    const addToOrder=(data)=>{
        //console.log(data)
        dispatch(setProduct(data))
    }
    return(
        <div className={s.container}>
            <div className={s.itemBody}>
                <img className={s.img} src={product_img} alt="Image"/>
                <h2 className={s.title}>{product_title}</h2>
                <p className={s.decription}>{product_about}</p>
            </div>
            <button className={s.btn}onClick={()=>addToOrder({item})}>Add</button>
        </div>
    )
}