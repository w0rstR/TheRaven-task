import s from "./ProductItem.module.css"
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setProduct} from "../../store/products/products.slice";
export default function ProductItem({item}){
    const dispatch = useDispatch();



    const addToOrder=(data)=>{
        dispatch(setProduct(data))
    }
    return(
        <div className={s.container}>
            <div className={s.itemBody}>
                <img className={s.img} src={item.product_img} alt=""/>
                <h2 className={s.title}>{item.product_title}</h2>
                <p className={s.decription}>{item.product_about}</p>
            </div>
            <button className={s.btn}onClick={()=>addToOrder({item})}>Add</button>
        </div>
    )
}