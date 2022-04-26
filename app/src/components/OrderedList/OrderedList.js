import OrderedItem from "../OrderedItem/OrderedItem";
import s from './OrderedList.module.css'
import OrderedForm from "../OrderedForm/OrderredForm";
import React from 'react'
import {useSelector} from "react-redux";

export default function OrderedList() {
    const {orderProducts,price} = useSelector(state => state["productReducer"]);
    const orderedList = Object.values(orderProducts);


    console.log(orderedList)

    return orderedList.length > 0 && (
        <div className={s.wrap}>
            <div className={s.container}>
                <div className={s.items}>
                    {orderedList.map(product => <OrderedItem key={product.id} item={product}/>)}
                </div>
                <div className={s.inputContainer}>
                    <OrderedForm/>
                </div>
            </div>
            <div className={s.total}>
                TOTAL: {price}$
            </div>
        </div>
    )
}