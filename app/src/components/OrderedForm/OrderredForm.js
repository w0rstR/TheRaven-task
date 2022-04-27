import s from './OrderedForm.module.css'
import React from 'react'
import {useForm} from 'react-hook-form';

import firebaseApp from "../../services/ordered.database.service";
import {useDispatch, useSelector} from "react-redux";
import {resetOrder} from "../../store/products/products.slice";
export default function OrderedForm(){
    const {handleSubmit, register, reset} = useForm()
    const {orderProducts,price} = useSelector(state => state["productReducer"]);

    const dispatch = useDispatch();

    const create = (data) => {
        const db = firebaseApp.database()
        db.ref('order').push({...data,...orderProducts,totalPrice:price})
        dispatch(resetOrder())
        reset()
    }

    return (
        <div>
            <div className={s.container}>
                <form onSubmit={handleSubmit(create)}>
                    <div className={s.wrap}>
                        <label className={s.inputContainer}>
                            <input className={s.input} type="text" placeholder={'NAME'} {...register('name',{required:true})}/>
                            <input className={s.input}  type="text" placeholder={'SURNAME'} {...register('surname',{required:true})}/>
                            <input className={s.input}  type="text" placeholder={'ADDRESS'} {...register('address',{required:true})}/>
                            <input className={s.input}  type="number" placeholder={'PHONE'} {...register('phone',{required:true})}/>
                        </label>
                        <button className={s.btn}>ORDER</button>
                    </div>
                </form>
            </div>
        </div>
    )
}