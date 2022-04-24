import s from "./Header.module.css"
export default function Header(){
    return(
        <div className={s.container}>
            <div>
                Header
            </div>
            <button className={s.btn}>
                Card
            </button>
        </div>
    )
}