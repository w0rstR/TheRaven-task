import s from "./ProductItem.module.css"

export default function ProductItem(){
    return(
        <div className={s.container}>
            <div>img</div>
            <div>Title</div>
            <div>Description</div>
            <div>add to bag</div>
        </div>
    )
}