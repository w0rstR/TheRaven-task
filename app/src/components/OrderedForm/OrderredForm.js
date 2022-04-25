import s from './OrderedForm.module.css'
import React from 'react'
export default function OrderedForm(){
    return (
        <div>
            <div className={s.container}>
                <form>
                    <div className={s.wrap}>
                        <label className={s.inputContainer}>
                            <input className={s.input} type="text" placeholder={'NAME'}/>
                            <input className={s.input}  type="text" placeholder={'SURNAME'}/>
                            <input className={s.input}  type="text" placeholder={'ADDRESS'}/>
                            <input className={s.input}  type="text" placeholder={'PHONE'}/>
                        </label>
                        <button className={s.btn}>ORDER</button>
                    </div>
                </form>
            </div>
        </div>
    )
}