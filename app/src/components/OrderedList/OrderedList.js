import OrderedItem from "../OrderedItem/OrderedItem";
import s from './OrderedList.module.css'
import OrderedForm from "../OrderedForm/OrderredForm";
import React from 'react'

export default function OrderedList(){
    return(
        <div className={s.wrap}>
            <div className={s.container}>
                <div className={s.items}>
                    <OrderedItem/>
                    <OrderedItem/>
                    <OrderedItem/>
                    <OrderedItem/>
                    <OrderedItem/>
                </div>
                <div className={s.inputContainer}>
                    <OrderedForm/>
                </div>
            </div>
            <div className={s.total}>
                TOTAL: 9999$
            </div>
        </div>
    )
}