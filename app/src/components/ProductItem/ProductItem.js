import s from "./ProductItem.module.css"

export default function ProductItem(){
    return(
        <div className={s.container}>
            <div className={s.itemBody}>
                <img className={s.img} src="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt=""/>
                <h2 className={s.title}>title</h2>
                <p className={s.decription}>Desc</p>
            </div>
            <button className={s.btn}>Add</button>
        </div>
    )
}