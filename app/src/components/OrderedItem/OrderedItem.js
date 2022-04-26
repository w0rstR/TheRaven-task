import s from "./OrderedItem.module.css";
import React from 'react'
import {useDispatch} from "react-redux";
import {addProduct, deleteProduct} from "../../store/products/products.slice";
export default function OrderedItem({item}){
    const {product_img, product_title,product_about,count} = item;
    const dispatch = useDispatch();


    const add = ()=>{
        dispatch(addProduct({item}))
    }

    const delroduct = ()=>{
        dispatch(deleteProduct({item}))
    }
    return(
        <div className={s.container}>
            <div className={s.imgBlock}>
                <img className={s.img} src={product_img} alt="Image"/>
            </div>
            <div className={s.secondBlock}>
                <div className={s.description}>
                    <h2 className={s.title}>{product_title}</h2>
                    <p className={s.about}>{product_about}</p>
                </div>
                <div className={s.block}>
                    <button className={s.wrap} onClick={delroduct}>
                        -
                    </button>
                    <div className={s.count}>
                        {count}
                    </div>
                    <button className={s.wrap} onClick={add}>
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}