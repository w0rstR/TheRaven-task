import s from "./OrderedItem.module.css";
import React from 'react'
export default function OrderedItem(){
    return(
        <div className={s.container}>
            <div className={s.imgBlock}>
                <img className={s.img} src="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt=""/>
            </div>
            <div className={s.secondBlock}>
                <div className={s.description}>
                    <h2 className={s.title}>Title of Item</h2>
                    <p className={s.about}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className={s.block}>
                    <button className={s.wrap}>
                        -
                    </button>
                    <div className={s.count}>
                        1
                    </div>
                    <button className={s.wrap}>
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}